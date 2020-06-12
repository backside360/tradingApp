import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';

import { theme } from '../../../configs/theme';
import { Button } from './index';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, themeDecorator],
};

export const Emoji = () => (
  <Button text={text('Button text', 'Hello button')} />
);
