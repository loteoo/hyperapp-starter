import { app } from 'hyperapp'

// Import best-practices defaults
import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/page.css'

// Global styling
import './global.css'

// Import app
import init from './app/init'
import view from './app/view'

// Initialize the app
app({ init, view, node: document.getElementById('app') })

// Enable the service worker when running the build command
if (process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
}
