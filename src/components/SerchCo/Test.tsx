import React, { useState } from 'react';
import { AutoComplete, Input, Row, Col } from 'antd';
import { observer } from 'mobx-react';
import './style.css';
import 'antd/dist/antd.css';
import PriceCard from '../PriceCard/index';
import { useInjection } from '../../service/Injection';

const { TextArea } = Input;
const { Option } = AutoComplete;

const Test: React.FC = observer(() => {
  const [loading, setLoading] = useState<boolean>(false);
  /** И почему этот тип сработал? */
  const [titleAuto, setTitleAuto] = useState<JSX.Element[]>();
  const {
    api,
    store: { QuoteStore }
  } = useInjection();

  const fetchCompany = async (name = '') => {
    const data = await api.search.getSearch(name);
    const companyList = data.bestMatches;

    if (companyList !== undefined) {
      const options = companyList.map(elem => (
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

  /** Number или string, не работает, поработать с промисами  */
  const onSelect = async (value: any) => {
    setLoading(true);
    api.quotes.getQuote(value).then(res => QuoteStore.setQuoteStore(res));

    // await QuoteStore.setPreviousDayPrice(value);
    // await QuoteStore.setMonthlyPrice(value);
    Promise.all([
      QuoteStore.setPreviousDayPrice(value),
      QuoteStore.setMonthlyPrice(value)
    ]);
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
          <PriceCard loading={loading} />
        </Col>
      </Row>
    </div>
  );
});

export default Test;
