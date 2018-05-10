import jsx from 'rollup-plugin-jsx'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const dev = !!process.env.ROLLUP_WATCH  // True if launched via npm start
const prod = !process.env.ROLLUP_WATCH  // True if launched via npm build

export default {
  input: 'src/main.js',
  output: {
    file: 'public/js/app.js',
    sourcemap: dev ? 'inline' : false,
    format: 'iife',
    intro:
      !dev &&
      `
      history.replaceState(null, null, sessionStorage.redirect)
      delete sessionStorage.redirect
      if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')
    `,
  },
  plugins: [
    jsx({factory: 'h'}),
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
      }),
  ],
}
