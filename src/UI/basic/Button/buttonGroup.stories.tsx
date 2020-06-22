import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';

import { theme } from '../../../configs/theme';
import { ButtonGroup, Button } from './index';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Button',
  component: ButtonGroup,
  decorators: [withKnobs, themeDecorator],
};

export const Button_Group = () => (
  <ButtonGroup>
    <Button text={text('Text', 'Отправить')} />
    <Button text={text('Text2', 'Отправить2')} />
  </ButtonGroup>
);
