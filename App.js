import React from 'react';
import { ToastProvider } from './src/toast/ToastContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <ToastProvider>
      <HomeScreen />
    </ToastProvider>
  );
};

export default App;
