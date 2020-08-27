import React, { useState } from 'react';

import { Card, Button } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import './style.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import moment from 'moment';
import { useInjection } from '../../service/Injection';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const MontlyCard = observer((props) => {
  const { handleToggle } = props;
  const {
    store: { QuoteStore },
  } = useInjection();
  const [date, setDate] = useState<string>();

  /** Что из себя представляет Moment? */
  const disabled = (current: any) => {
    const dates =
      QuoteStore.monthlyPriceStore && Object.keys(QuoteStore.monthlyPriceStore);

    if (
      current &&
      dates &&
      dates.some(
        (row) =>
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
    <div className="slide_right">
      {Object.keys(toJS(QuoteStore.quoteStore)).length !== 0 ? (
        <Card
          title="А сколько там раньше стоило?"
          extra={
            <DatePicker
              format={dateFormat}
              onChange={(value, time) => setDate(time)}
              disabledDate={disabled}
              placeholder="Выбирай дату"
            ></DatePicker>
          }
          style={{ width: '500px', height: '100%', borderRadius: '10px' }}
          hoverable
        >
          {date && ['2. high'] ? (
            //@ts-ignore

            <p>{QuoteStore.monthlyPriceStore[date]['2. high']}</p>
          ) : null}
          <Button onClick={handleToggle}>Go</Button>
        </Card>
      ) : null}
    </div>
  );
});

export default MontlyCard;
