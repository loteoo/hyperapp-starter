import styles from './header.module.css';
import utils from '/src/lib/utils.module.css';

const Header = () => {
  return (
    <header class={styles.header}>
      <nav class={`${utils.container} ${utils.group}`}>
        <a href="/" style={{ marginRight: 'auto' }}>
          home
        </a>
        <a href="/about">about</a>
        <a href="/404">404</a>
      </nav>
    </header>
  );
};

export default Header;
