import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: palevioletred;
  color: ${(props) => props.theme.main};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline-color: #fff;
`;

ButtonStyled.defaultProps = {
  theme: {
    main: 'white',
  },
};
