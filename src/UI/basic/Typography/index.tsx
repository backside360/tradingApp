import styled from 'styled-components';

type ITypograhyForm = {
  isForm?: boolean;
};

export const Heading = styled.div`
  font-size: 35px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.01em;
  margin-top: 52px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const TopHeader = styled.div<ITypograhyForm>`
  font-size: 29px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 32px;
  margin-top: ${(p) => (p.isForm ? 48 : 40)}px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-top: 40px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const H2 = styled.h2<ITypograhyForm>`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.008em;
  margin-top: ${(p) => (p.isForm ? 36 : 28)}px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const H3 = styled.h3<ITypograhyForm>`
  font-size: 16px;
  font-weight: 500;
  line-height: ${(p) => (p.isForm ? 24 : 20)}px;
  letter-spacing: -0.006em;
  margin-top: ${(p) => (p.isForm ? 32 : 24)}px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const H4 = styled.h4<ITypograhyForm>`
  font-size: 14px;
  font-weight: 600;
  line-height: ${(p) => (p.isForm ? 20 : 16)}px;
  letter-spacing: -0.003em;
  margin-top: ${(p) => (p.isForm ? 24 : 16)}px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const ListHeader = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0;
  margin-top: 20px;
  text-transform: uppercase;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const H5 = styled.h5`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0;
  margin-top: 16px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const H6 = styled.h6`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  margin-top: 16px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => p.theme.colors.N800};
`;

export const Quote = styled.blockquote<{ isBlock?: boolean }>`
  display: ${(p) => (p.isBlock ? 'block' : 'inline')};
  font-family: ${(p) => p.theme.typography.font};
  font-size: 14px;
`;

export const Paragraph = styled.p`
  max-width: 680px;
  margin: 20px 0;
  font-size: 14px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.N800};
`;
