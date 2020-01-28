import React, { useState, useEffect } from 'react';
import Test from './components/SerchCo/Test';
import Head from './components/Header/index';
import Foot from './components/Footer/index';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="main">
      <Layout>
        <Header>
          <Head />
        </Header>
        <Content className="content">
          <Test />
        </Content>
        <Footer className="footer">
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
