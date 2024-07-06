import { State } from '/src/lib/state';
import Home from '/src/pages/Home';
import About from '/src/pages/About';
import NotFound from '/src/pages/NotFound';

const Router = (state: State) => {
  if (state.location.path === '/') {
    return <Home {...state} />;
  }
  if (state.location.path === '/about') {
    return <About {...state} />;
  }
  return <NotFound {...state} />;
};

export default Router;
