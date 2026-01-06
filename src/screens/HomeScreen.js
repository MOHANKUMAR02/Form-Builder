import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useToast } from '../toast/ToastContext';

const HomeScreen = () => {
  const { showToast } = useToast();

  return (
    <View style={styles.container}>
      <Button
        title="Show Success Toast"
        onPress={() =>
          showToast({
            message: 'Saved successfully!',
            type: 'success',
          })
        }
      />

      <Button
        title="Show Toast with Action"
        onPress={() =>
          showToast({
            message: 'Item deleted',
            type: 'error',
            duration:10000,
            actions: [
              {
                text: 'UNDO',
                onPress: () => console.log('Undo clicked'),
              },
            ],
          })
        }
      />

      <Button
        title="Stack Toasts"
        onPress={() => {
          showToast({ message: 'Toast 1' });
          showToast({ message: 'Toast 2' });
          showToast({ message: 'Toast 3' });
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
});
