import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, Text } from '@components';
import { layout } from '@utils';

type ErrorProps = {
  error: unknown;
  handleRetry: () => void;
};

export const Error = memo(({ error, handleRetry }: ErrorProps) => {
  const message = `${error}`

  return (
    <View style={styles.wrapper}>
      <Text
        text={message}
        fontSize={16}
        textAlign="center"
        style={{ paddingBottom: layout.pixelSizeVertical(50) }}
      />
      <Button title="Try Again" onPress={handleRetry} containerStyle={styles.btn} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: layout.pixelSizeHorizontal(15),
  },
  btn: {
    width: '50%',
  },
});
