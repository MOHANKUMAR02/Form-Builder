import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToastItem from './ToastItem';

const ToastStack = ({ toasts, removeToast }) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      {toasts.map((toast, index) => (
        <ToastItem
          toast={toast}
          index={index}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </View>
  );
};

export default ToastStack;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
});
