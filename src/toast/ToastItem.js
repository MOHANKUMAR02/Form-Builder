import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';

const TOAST_THEME = {
  success: {
    bg: '#2e7d32',
    icon: '✓',
  },
  error: {
    bg: '#c62828',
    icon: '❌',
  },
  warning: {
    bg: '#ed6c02',
    icon: '⚠',
  },
  default: {
    bg: '#323232',
    icon: 'ℹ',
  },
};

const ToastItem = ({ toast, onClose }) => {
  const translateY = useRef(new Animated.Value(40)).current;
  const opacity = useRef(new Animated.Value(100)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

  }, []);

  const theme = TOAST_THEME[toast.type] || TOAST_THEME.default;

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          backgroundColor: theme.bg,
          opacity,
          transform: [{ translateY }, { scale }],
        },
      ]}
    >
      <View style={styles.row}>
        <Text style={styles.icon}>{theme.icon}</Text>
        <Text style={styles.message}>{toast.message}</Text>
      </View>

      {toast.actions?.length > 0 && (
        <View style={styles.actions}>
          {toast.actions.map((a, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                a.onPress?.();
                closeToast();
              }}
            >
              <Text style={styles.actionText}>{a.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Animated.View>
  );
};

export default ToastItem;

const styles = StyleSheet.create({
  toast: {
    width: '92%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginTop: 10,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // Android shadow
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
    fontWeight: '700',
  },
  message: {
    color: '#fff',
    fontSize: 15,
    flex: 1,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 16,
    opacity: 0.9,
  },
});
