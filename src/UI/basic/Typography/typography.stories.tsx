import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { theme } from '../../../configs/theme';
import * as Typography from './index';

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Typography',
  component: Typography,
  decorators: [withKnobs, themeDecorator],
};

export const Standart_Typography = () => (
  <>
    <Typography.H1>{text('H1', 'Hi', 'h1')}</Typography.H1>
    <Typography.H2 isForm={boolean('isFormH2', false, 'h2')}>
      {text('H2', 'Hi', 'h2')}
    </Typography.H2>
    <Typography.H3 isForm={boolean('isFormH3', false, 'h3')}>
      {text('H3', 'Hi', 'h3')}
    </Typography.H3>
    <Typography.H4 isForm={boolean('isFormH4', false, 'h4')}>
      {text('H4', 'Hi', 'h4')}
    </Typography.H4>
    <Typography.H5>{text('H5', 'Hi', 'h5')}</Typography.H5>
    <Typography.H6>{text('H6', 'Hi', 'h6')}</Typography.H6>
    <Typography.Heading>{text('Heading', 'Hi', 'heading')}</Typography.Heading>
    <Typography.ListHeader>
      {' '}
      {text('ListHeader', 'Hi', 'list header')}
    </Typography.ListHeader>
    <Typography.Paragraph>
      {text('Paragraph', 'Hi', 'paragraph')}
    </Typography.Paragraph>
    <Typography.Quote isBlock={boolean('isBlock', false, 'quote')}>
      {text('Quote', 'Hi', 'quote')}
    </Typography.Quote>
    <Typography.TopHeader>
      {text('TopHeadera', 'Hi', 'TopHeader')}
    </Typography.TopHeader>
  </>
);
