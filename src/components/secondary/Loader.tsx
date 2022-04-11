import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';



import { Modal } from './Modal';

type LoaderProps = {
  visible: boolean;
};

export const Loader = memo(({ visible }: LoaderProps) => {
  return (
    <Modal visible={visible} opacity={0.6}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size='large' color='#fff' />
      </View>
    </Modal>
  );
});
