/* eslint-disable react/no-multi-comp */
import React, { ReactElement, useState, useEffect } from 'react';
import { Table, Popconfirm, Button, Row, message, Form, Upload, Drawer } from 'antd';
import { UploadOutlined, QuestionCircleTwoTone } from '@ant-design/icons';

import moment from 'moment';
import css from './styles.css';
import Empty from './images/emptyTable.svg';
import Download from './images/download.svg';
import Delete from './images/delete.svg';

import routes from 'src/routes/api';
import { TFile } from 'src/shared/entities/Ued/types/services';

const { Column } = Table;

interface IName {
    lastName: string;
    firstName: string;
    middleName: string;
}

interface IProps {
    uedId: number;
    visibleHandler: () => void;
    fetchFiles: (id: number) => Promise<TFile[] | []>;
    deleteFile: (id: number) => Promise<void>;
    isSupportingDocAvailable: boolean;
}

/**
 *  Компонент для отображения таблицы с подтверждающими документами.
 */
const UedFiles = (props: IProps): ReactElement => {
    const {
        visibleHandler,
        uedId,
        fetchFiles,
        deleteFile,
        isSupportingDocAvailable,
    } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TFile[] | []>([]);

    const fetchData = async (): Promise<void> => {
        try {
            setData(await fetchFiles(uedId));
        } catch {
            message.error('Ошибка загрузки списка файлов!');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: number): Promise<void> => {
        try {
            await deleteFile(id);
            message.success('Файл удалён!');
        } catch {
            message.error('Ошибка удаления!');
        }
        fetchData();
    };

    /** Функция для форматирования имени пользователя в списке загруженные документов */
    const formatName = (name: IName): string =>
        `${name.lastName} ${name.firstName} ${name.middleName}`;

    /**
     *
     * Функция для удаления формата файла в его названии
     */
    const convertFileName = (text: string): string => text.split('.')[0];

    /** Вспомогательная функция для отображения иконки при отсутствии данных в таблице */
    const locale = (): JSX.Element => (
        <>
            <h3>Пока здесть пусто</h3>
            <Empty />
        </>
    );

    const uploader = {
        multiple: true,
        data: {
            documentId: uedId,
            documentType: 'uedCardsId',
            category: 'Подтверждающий документ по выполнению КПЭ',
        },
        showUploadList: false,
        action: '/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status === 'uploading') {
                //
            }
            if (status === 'done') {
                message.success(`${info.file.name} успешно загружен!`);
                fetchData();
            } else if (status === 'error') {
                message.error(`${info.file.name} ошибка при загрузке!`);
            }
        },
    };

    const title = <h4 style={{ fontWeight: 600 }}>Подтверждающие документы к УЭД</h4>;

    const footer = (
        <Button
            type="default"
            onClick={visibleHandler}
            className={css.btnBack}
            size="small"
        >
            Назад
        </Button>
    );

    return (
        <Drawer
            visible={true}
            closable
            width={800}
            onClose={visibleHandler}
            title={title}
            destroyOnClose={true}
            footer={footer}
            bodyStyle={{ padding: 0 }}
        >
            <Table
                dataSource={data}
                size={'middle'}
                className="table-without-first-col-new"
                locale={{ emptyText: locale() }}
                pagination={false}
                loading={isLoading}
                rowKey="id"
            >
                <Column title="№" render={(document) => data.indexOf(document) + 1} />
                <Column
                    title="Наименование документа"
                    dataIndex="fileName"
                    render={(text) => convertFileName(text)}
                    key="category"
                />
                <Column title="Формат" dataIndex="format" key="format" />
                <Column
                    title="Кем загружен"
                    dataIndex="author"
                    // eslint-disable-next-line react/jsx-no-bind
                    render={(value) => formatName(value)}
                    key="author"
                />
                <Column
                    title="Дата загрузки"
                    dataIndex="creationDate"
                    key="creationDate"
                    render={(value) => moment(value).format('DD.MM.YYYY')}
                    sorter
                />
                <Column
                    title="Скачать"
                    align="center"
                    // eslint-disable-next-line react/jsx-no-bind
                    render={(record) => (
                        <a
                            className={css.action}
                            href={(routes.fileStorage as any).getFile(record.fileId).url}
                            download={'Подтверждающий документ по выполнению КПЭ'}
                        >
                            <Download />
                        </a>
                    )}
                />

                <Column
                    title="Удалить"
                    key="delete"
                    // eslint-disable-next-line react/jsx-no-bind
                    render={(record) => (
                        <span>
                            <Popconfirm
                                placement="topRight"
                                arrowPointAtCenter={true}
                                title={'Действительно хотите удалить?'}
                                // eslint-disable-next-line react/jsx-no-bind
                                onConfirm={() => handleDelete(record.fileId)}
                                okText="Да"
                                cancelText="Нет"
                                disabled={isSupportingDocAvailable}
                                icon={<QuestionCircleTwoTone twoToneColor="#F5222D" />}
                            >
                                <a
                                    className={
                                        isSupportingDocAvailable
                                            ? css.actionDisabled
                                            : css.action
                                    }
                                >
                                    <Delete disabled={isSupportingDocAvailable} />
                                </a>
                            </Popconfirm>
                        </span>
                    )}
                />
            </Table>
            <Row align="middle" justify="space-between" className={css.footer}>
                <div className={css.totalCount}>
                    Всего подтверждающих документов:{' '}
                    <span style={{ color: 'blue' }}>{data ? data.length : 0}</span>
                </div>

                <Upload {...uploader}>
                    <Button
                        type="dashed"
                        disabled={isSupportingDocAvailable}
                        className={css.btnUpload}
                    >
                        <UploadOutlined /> Загрузить документ
                    </Button>
                </Upload>
            </Row>
        </Drawer>
    );
};
export default UedFiles;
