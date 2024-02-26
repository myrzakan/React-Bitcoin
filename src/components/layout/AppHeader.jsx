import { Header } from 'antd/es/layout/layout';
import React from 'react';

export const AppHeader = () => {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };

  return <Header style={headerStyle}>Header</Header>;
};
