import { app } from 'hyperapp'

// Import best-practices css defaults
import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

// Global styling
import './global.css'

// App init imports
import init from './app/init'
import view from './app/view'

// Initialize the app on the #app div
app({ init, view, node: document.getElementById('app') })

// Enable the service worker when running the build command
if (process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
}
