import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import nested from 'postcss-nested'
import focus from 'postcss-focus'
import cssnext from 'postcss-cssnext'
import rucksack from 'rucksack-css'

const dev = !!process.env.ROLLUP_WATCH  // If launched via npm start
const prod = !process.env.ROLLUP_WATCH  // If launched via npm run build

export default {
  input: dev ? 'src/dev.js' : 'src/prod.js',
  output: {
    file: 'public/app.js',
    sourcemap: dev ? 'inline' : false,
    format: 'iife'
  },
  watch: {
    chokidar: false
  },
  plugins: [
    postcss({
      plugins: [
        nested(),
        focus(),
        rucksack({ autoprefixer: false }),
        cssnext({ warnForDuplicates: false })
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
