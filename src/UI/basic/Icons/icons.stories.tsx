import React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { theme } from '../../../configs/theme';
import * as icons from './index';
import { TSize } from './types';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default {
  title: 'Icon',
  component: icons,
  decorators: [withKnobs, themeDecorator],
};

type TColors = keyof DefaultTheme['colors'];

const colors = Object.keys(theme.colors) as TColors[];
const sizes = ['small', 'medium', 'large', 'xlarge'] as TSize[];

export const Icon = () => (
  <Wrapper>
    {Object.entries(icons).map(([key, Icon]) => (
      <IconWrapper key={key}>
        <Icon
          size={select('Size', sizes, sizes[0])}
          color={select('Color', colors, colors[0])}
          primaryColor={select('Primary', colors, 'W700')}
          secondaryColor={select('Secondary', colors, colors[0])}
        />
        <div>{key}</div>
      </IconWrapper>
    ))}
  </Wrapper>
);
