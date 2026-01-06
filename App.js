import React from 'react';
import { ToastProvider } from './src/Toast/ToastContext';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  return (
    <ToastProvider>
      <HomeScreen />
    </ToastProvider>
  );
};

export default App;
