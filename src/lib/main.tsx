import { app } from 'hyperapp';

import App from '/src/components/App';

import { init, State } from '/src/lib/state';
import { TrackLinkClicks, onPushState } from '/src/lib/router';

import './global.css';

const view = (state: State) => (
  <div id="app" onclick={TrackLinkClicks}>
    {App(state)}
  </div>
);

app({ init, view, node: document.getElementById('app')!, subscriptions: () => [onPushState] });
