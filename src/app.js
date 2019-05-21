import { app } from 'hyperapp'
import init from './app/init'
import view from './app/view'

// Initialize the app
app({ init, view, node: document.body })

// Enable the service worker
navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
