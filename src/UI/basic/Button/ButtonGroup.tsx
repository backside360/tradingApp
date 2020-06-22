import React from 'react';
import styled from 'styled-components';

const Space = styled.span<{ isLast: boolean }>`
  padding: ${(p) => (p.isLast ? 0 : '0 4px 0 0')};
`;

export const ButtonGroup: React.FC = ({ children }) => {
  const length = React.Children.count(children);
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <Space isLast={index === length - 1}>{child}</Space>
      ))}
    </>
  );
};
