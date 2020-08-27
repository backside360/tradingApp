import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { theme } from '../../../configs/theme';
import { Checkbox } from './Checkbox';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs, themeDecorator],
};

export const Standart_Checkbox = () => {
  const [check, setCheck] = React.useState(false);
  return (
    <Checkbox
      checked={check}
      onClick={() => {
        setCheck((v) => !v);
        action('check');
      }}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      label={text('Label', 'Checkbox')}
      visible={boolean('Visible', true)}
      required={boolean('Required', false)}
    />
  );
};
