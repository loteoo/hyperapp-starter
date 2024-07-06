import { Subscription } from 'hyperapp';
import { State } from './state';

export type InternalPath = `/${string}`;

export interface Location {
  path: InternalPath;
  query: Record<string, any>;
  hash: string;
}

// Navigation util
export const navigate = (path: InternalPath) => {
  history.pushState(null, '', path);
  setTimeout(() => {
    dispatchEvent(new CustomEvent('pushstate'));
  });
};

// Get current location
export const getLocation = (): Location => {
  const { pathname, search, hash } = window.location;
  const query: Record<string, any> = {};
  for (const [key, value] of new URLSearchParams(search)) {
    query[key] = value;
  }
  return {
    path: pathname as InternalPath,
    query,
    hash,
  };
};

// Link click Action
export const TrackLinkClicks = (state: State, ev: MouseEvent) => {
  let clicked: HTMLElement | null = ev.target as HTMLElement;

  // Crawl up dom tree, look if click landed inside a <a /> tag
  const anchor = clicked.closest('a');

  if (!anchor) {
    return state;
  }
  const href = anchor.getAttribute('href');

  if (!href?.startsWith('/')) {
    return state;
  }

  ev.preventDefault();
  ev.stopPropagation();
  navigate(href as InternalPath);

  return state;
};

// Route change Subscription
export const onPushState: Subscription<State> = [
  (dispatch) => {
    const handleLocationChange = () => {
      dispatch((state) => ({ ...state, location: getLocation() }));
    };
    addEventListener('pushstate', handleLocationChange);
    addEventListener('popstate', handleLocationChange);
    return () => {
      removeEventListener('pushstate', handleLocationChange);
      removeEventListener('popstate', handleLocationChange);
    };
  },
  null,
];
