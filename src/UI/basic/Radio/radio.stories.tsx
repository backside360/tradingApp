import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { theme } from '../../../configs/theme';
import { Radio } from './Radio';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Radio',
  component: Radio,
  decorators: [withKnobs, themeDecorator],
};

const items = [
  { id: '0', value: '1' },
  { id: '1', value: '2' },
];

export const Standart_Radio = () => {
  const [selected, setSelected] = React.useState('1');

  const handleSelect = React.useCallback(
    (e) => setSelected(e.target.value),
    []
  );

  return (
    <Radio
      items={items}
      selected={selected}
      onSelect={handleSelect}
      required={boolean('Required', false)}
      tabIndex={number('TabIndex', 0)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
    />
  );
};
