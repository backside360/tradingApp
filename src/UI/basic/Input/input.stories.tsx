import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  withKnobs,
  text,
  select,
  boolean,
  number,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { AddCircle } from '../Icons/index';

import { theme } from '../../../configs/theme';
import { Input } from './Input';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs, themeDecorator],
};

export const Standart_Input = () => {
  const [value, setValue] = useState<string>('');

  const onChange = React.useCallback((e) => {
    setValue(e.target.value ?? '');
  }, []);

  return (
    <Input
      compact={boolean('Compact', false)}
      disabled={boolean('Disabled', false)}
      value={value}
      onChange={onChange}
      label="Поле ввода"
      icon={AddCircle}
      onIconClick={action('click')}
      required={boolean('Required', false)}
      error={text('Error', '')}
    />
  );
};
