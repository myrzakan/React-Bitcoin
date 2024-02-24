import { Content } from 'antd/es/layout/layout';
import React from 'react';

export const AppContent = () => {
  const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#000135',
    padding: '1rem',
  };
  return <Content style={contentStyle}>Content</Content>;
};
