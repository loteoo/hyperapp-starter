import { State } from '/src/lib/state';

import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import Router from '/src/components/Router';

import styles from './app.module.css';

const App = (state: State) => {
  return (
    <div class={styles.app}>
      <Header />
      <main>
        <Router {...state} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
