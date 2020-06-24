import React from 'react';
import { Modal, Input, message } from 'antd';
import { api } from '../../../services/api';
import { mapQuotesFromApiToStore } from '../../../entities/quotes/mapping';
import { Quotes } from '../../../entities/quotes';

type TProps = {
  visible: boolean;
  onSuccess: (text: string) => void;
  onCancel: () => void;
};

/**
 *  Если модуль используется в нескольких местах и у него динамичное поведение, то логика выносится (в большинстве случаев)
 *  Если модуль используется в нескольких местах и у него статичное поведение, то вся логика внутри модуля
 * */
export const AddStock: React.FC<TProps> = ({
  visible,
  onSuccess,
  onCancel,
}) => {
  const [text, setText] = React.useState('');

  const handleSuccess = React.useCallback(() => {
    if (text === '') {
      message.warning('Введите символ компании!');
    } else {
      api.company
        .getProfile(text)
        .then((company) => Quotes.push(...mapQuotesFromApiToStore([company])))
        .then(() => onSuccess(text));
    }
  }, [onSuccess, text]);

  return (
    <Modal
      title="Add new stock"
      visible={visible}
      onOk={handleSuccess}
      onCancel={onCancel}
    >
      {/* FORM */}
      <Input
        placeholder="AAPL, BOE, etc..."
        onChange={(e) => setText(e.target.value)}
      />
    </Modal>
  );
};

export default AddStock;
