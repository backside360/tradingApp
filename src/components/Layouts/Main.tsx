import React from 'react';
import { Layout } from 'antd';

interface IProps {
  header?: React.ElementType;
  body?: React.ElementType;
  footer?: React.ElementType;
}

export const MainLayout: React.FC<IProps> = ({
  header: Header,
  body: Body,
  footer: Footer
}) => (
  <div className="main">
    {Header && <Header />}
    <Layout>
      <Layout.Content className="content">{Body && <Body />}</Layout.Content>
    </Layout>
    {Footer && <Footer />}
  </div>
);
