import path from 'path';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  buildCJS('src/index.ts'),
  buildESM('src/index.ts'),
  buildCSS('src/sass/index.scss', 'css/lubycon-ui-kit.css'),
  buildCSS('src/sass/index.scss', 'css/lubycon-ui-kit.min.css', {
    minimize: {
      preset: ['default'],
    },
  }),
];

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

function buildCSS(inputFile, outputFile, postCSSOptions = {}) {
  return {
    input: inputFile,
    output: { file: `dist/${outputFile}`, format: 'cjs' }, // format is not used.
    plugins: [
      postcss({
        plugins: [autoprefixer],
        sourceMap: true,
        extract: true,
        extensions: ['.scss', '.css'],
        ...postCSSOptions,
      }),
    ],
  };
}
