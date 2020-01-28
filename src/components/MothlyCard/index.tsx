import React, { useState } from 'react';
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
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const { TextArea } = Input;
const { Option } = AutoComplete;

const MontlyCard: React.FC = observer(() => {
  const { QuoteStore } = useStores();
  const [date, setDate] = useState<string>();

  const disabled = (current: any) => {
    const dates = Object.keys(QuoteStore.monthlyPriceStore);
    if (
      current &&
      dates.some(
        row =>
          moment(row).format('YYYY-MM-DD') ===
          moment(current._d).format('YYYY-MM-DD')
      )
    ) {
      return false;
    } else {
      return current;
    }
  };

  return (
    <div>
      {Object.keys(toJS(QuoteStore.quoteStore)).length !== 0 ? (
        <Card
          title="Enter date you want"
          extra={
            <DatePicker
              format={dateFormat}
              onChange={(value, time) => setDate(time)}
              disabledDate={disabled}
            ></DatePicker>
          }
          style={{ width: 500 }}
        >
          {date !== undefined && ['2. high'] !== undefined ? (
            //@ts-ignore
            <p>{QuoteStore.monthlyPriceStore[date]['2. high']}</p>
          ) : null}
        </Card>
      ) : null}
    </div>
  );
});

export default MontlyCard;
