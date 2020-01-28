import React, { useState, useContext } from 'react';
import { useStores } from '../../entities/quotes/stores';
import {
  fetchCo,
  fetchQuote
} from '../../entities/quotes/Quotes/fetchCompanies';
import { Card, AutoComplete, Input, Row, Col, Icon } from 'antd';
import { ISearch } from '../../entities/quotes/Quotes/model';
import { toJS } from 'mobx';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { Animated } from 'react-animated-css';
import './style.css';
import 'antd/dist/antd.css';
import { ApiContext } from '../../contexts';
import MontlyCard from '../MothlyCard/index';

const { TextArea } = Input;
const { Option } = AutoComplete;

const Test: React.FC = observer(() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [titleAuto, setTitleAuto] = useState();
  const { QuoteStore } = useStores();
  const api = useContext(ApiContext);

  const fetchCompany = async (name = '') => {
    //@ts-ignore
    const data: ISearch[] = await api.search.getSearch(name);
    //@ts-ignore
    const data1 = data.bestMatches;

    if (data1 !== undefined) {
      const options = data1.map((elem: any) => (
        <Option key={elem['1. symbol']} value={elem['1. symbol']}>
          <div className="global-search-item">
            <span className="global-search-item-desc">{elem['1. symbol']}</span>
            <span className="global-search-item-count">{elem['2. name']}</span>
          </div>
        </Option>
      ));
      setTitleAuto(options);
    }
  };

  const onSelect = async (value: any) => {
    setLoading(true);
    await QuoteStore.setQuoteStore(value);
    await QuoteStore.setPreviousDayPrice(value);
    await QuoteStore.setMonthlyPrice(value);
    console.log(toJS(QuoteStore.previousDayStore));
    setLoading(false);
  };

  const clearA = () => {
    QuoteStore.resetQuoteStore();
  };

  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={12}>
          <AutoComplete
            dataSource={titleAuto}
            dropdownClassName="certain-category-search-dropdown"
            style={{ width: '100%' }}
            onSearch={value => fetchCompany(value)}
            allowClear={true}
            optionLabelProp="value"
            onSelect={e => onSelect(e)}
            onChange={e => clearA()}
            size="large"
          >
            <TextArea
              placeholder="input here"
              className="customs"
              style={{ height: 80, backgroundColor: '#fff' }}
            />
          </AutoComplete>
        </Col>
      </Row>

      <Row type="flex" justify="center">
        <Col className="card">
          <Animated
            animationIn="bounceInUp"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <Card
              //@ts-ignore
              title={QuoteStore.quoteStore.companyName}
              style={{ width: '300px', height: '100%', borderRadius: '10px' }}
            >
              {loading ? (
                <Spin></Spin>
              ) : (
                <>
                  <p>
                    Latest Price: {QuoteStore.quoteStore.latestPrice}
                    {Object.keys(toJS(QuoteStore.quoteStore)).length ===
                    0 ? null : QuoteStore.getPreviousDay ? (
                      <Animated
                        animationIn="bounce"
                        animationOut="zoomOutDown"
                        animationInDuration={3000}
                        animationOutDuration={3000}
                        isVisible={true}
                      >
                        <Icon
                          type="down-circle"
                          theme="twoTone"
                          twoToneColor="red"
                          style={{ fontSize: '20px', paddingLeft: '150px' }}
                        />
                      </Animated>
                    ) : (
                      <Animated
                        animationIn="bounce"
                        animationOut="zoomOutDown"
                        animationInDuration={3000}
                        animationOutDuration={3000}
                        isVisible={true}
                      >
                        <Icon
                          type="up-circle"
                          theme="twoTone"
                          twoToneColor="green"
                          style={{ fontSize: '20px', paddingLeft: '150px' }}
                        />
                      </Animated>
                    )}
                  </p>

                  <p> Exchange: {QuoteStore.quoteStore.primaryExchange}</p>
                </>
              )}
            </Card>
            <MontlyCard />
          </Animated>
        </Col>
      </Row>
    </div>
  );
});

export default Test;
