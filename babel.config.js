module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@assets': './src/assets',
            '@globalStyles': './src/assets/globalStyles.ts',
            '@components': './src/components/index.ts',
            '@models': './src/models/index.ts',
            '@hooks': './src/hooks/index.ts',
            '@screens': './src/screens/index.ts',
            '@services': './src/services/index.ts',
            '@utils': './src/utils/index.ts',
          },
        },
      ],
    ],
  };
};
