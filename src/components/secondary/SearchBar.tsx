import React from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { globalStyles } from '@globalStyles';
import { layout } from '@utils';

type SearchBarProps = TextInput['props'] & {
  value: string;
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>;
  onChangeText: (value: string) => void;
  onSearch?: () => void;
};

export const SearchBar = ({
  value,
  placeholder = 'Search activities',
  containerStyles,
  onChangeText,
  ...props
}: SearchBarProps) => {
  return (
    <View style={[styles.container, globalStyles.rowBetween, containerStyles]}>
      <View style={[styles.iconBox, globalStyles.rowCenter]}>
        <Feather name="search" size={20} color={'#15112D'} />
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#15112D'}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const height = layout.heightPixel(50);

const styles = StyleSheet.create({
  container: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: layout.pixelSizeHorizontal(8),
    borderWidth: 0.5,
    borderColor: '#15112D'
  },
  iconBox: {
    flexBasis: '10%',
  },
  input: {
    flex: 1,
    height,
    paddingRight: layout.pixelSizeHorizontal(20),
    fontSize: layout.fontPixel(14),
  },
  searchBox: {
    backgroundColor: 'red',
    height: height / 1.3,
    borderRadius: height / 2,
    width: height / 1.3,
    marginRight: layout.pixelSizeHorizontal(10),
  },
});
