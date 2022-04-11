import { Platform } from 'react-native';


type usePlatformReturnType = {
    isAndroid: boolean,
    isIOS: boolean
}

export const usePlatform = (): usePlatformReturnType => {
  return {
      isAndroid: Platform.OS === 'android',
      isIOS: Platform.OS === 'ios',
  }
};
