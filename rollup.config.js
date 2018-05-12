import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import autoprefixer from 'autoprefixer'
import rucksack from 'rucksack-css'

const dev = !!process.env.ROLLUP_WATCH  // True if launched via npm start
const prod = !process.env.ROLLUP_WATCH  // True if launched via npm build

export default {
  input: 'src/main.js',
  output: {
    file: 'public/js/app.js',
    sourcemap: dev ? 'inline' : false,
    format: 'iife'
  },
  plugins: [
    postcss({
      plugins: [
        nested(),
        cssnext({ warnForDuplicates: false }),
        rucksack(),
        autoprefixer()
      ],
      minimize: prod ? true : false,
      sourceMap: dev ? 'inline' : false
    }),
    buble({ jsx: 'h' }),
    resolve({ jsnext: true }),
    commonjs(),
    prod && uglify(),
    dev && livereload('public'),
    dev &&
      serve({
        open: true,
        contentBase: ['public'],
        historyApiFallback: true,
        host: 'hyperapp.localhost',
        port: 80,
      })
  ]
}
