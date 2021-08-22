import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [buildCJS('src/index.ts'), buildESM('src/index.ts')];

function buildJS(input, output, format) {
  return {
    input,
    external: ['react', 'react-dom'],
    output: [{ file: output, format, sourcemap: true }],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
      }),
      resolve({ extensions }),
      babel({ exclude: 'node_modules/**' }),
      commonjs({
        namedExports: {
          'prop-types': ['node', 'bool', 'string', 'any', 'arrayOf', 'oneOfType', 'object', 'func'],
        },
      }),
    ],
  };
}

function buildCJS(input) {
  const filename = path.parse(input).name;
  return buildJS(input, `dist/${filename}.js`, 'cjs');
}

function buildESM(input) {
  const filename = path.parse(input).name;
  return buildJS(input, `dist/esm/${filename}.js`, 'es');
}
