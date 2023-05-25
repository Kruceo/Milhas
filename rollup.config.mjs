import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'milhas',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    }),
  ],
};