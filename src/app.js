import { app } from 'hyperapp'
import init from './app/init'
import view from './app/view'

// Initialize the app
app({ init, view, container: document.body })
