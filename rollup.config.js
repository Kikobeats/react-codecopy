import external from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import fs from 'fs'

import pkg from './package.json'

const babelRc = JSON.parse(fs.readFileSync('./.babelrc'))

export default {
  input: 'src/index.js',
  external: [/@babel\/runtime/],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external({
      includeDependencies: true
    }),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      ...babelRc
    }),
    terser(),
    filesize(),
    visualizer({ template: 'treemap' })
  ]
}
