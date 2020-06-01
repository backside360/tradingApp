import React from 'react';

import { ButtonStyled } from '../components/Atoms/Button';

export default {
  title: 'Button',
  component: ButtonStyled,
};

export const Text = () => <ButtonStyled>Hello Button</ButtonStyled>;

export const Emoji = () => (
  <ButtonStyled>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonStyled>
);
