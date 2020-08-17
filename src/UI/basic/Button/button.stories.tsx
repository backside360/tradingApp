import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { theme } from '../../../configs/theme';
import { Button, IType, ISpacing } from './Button';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, themeDecorator],
};

const Types: IType[] = ['primary', 'default', 'warning', 'danger', 'link'];
const Spacing: ISpacing[] = ['default', 'compact'];

export const Standart_Button = () => (
  <Button
    type={select('Type', Types, Types[0])}
    spacing={select('Spacing', Spacing, Spacing[0])}
    text={text('Text', 'Submit')}
    visible={boolean('Visible', true)}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
    onClick={action('button-click')}
  />
);
