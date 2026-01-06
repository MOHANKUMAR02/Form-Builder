import React, { createContext, useContext, useState } from 'react';
import ToastStack from './ToastStack';

const ToastContext = createContext(null);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = ({
    message,
    duration = 3000,
    actions = [],
    type = 'default',
  }) => {
    const id = Date.now().toString();

    setToasts((prev) => [
      ...prev,
      { id, message, actions, type, duration },
    ]);


    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastStack toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
