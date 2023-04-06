module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svgx'],
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          types: './src/types',
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          routes: './src/routes',
          screens: './src/screens',
          utils: './src/utils',
          themes: './src/themes',
        },
        extensions: [
          '.native.ts',
          '.native.tsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.mjs',
        ],
      },
    ],
  ],
};
