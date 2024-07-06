import styles from './footer.module.css';
import utils from '/src/lib/utils.module.css';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={`${utils.container} ${utils.group}`} style={{ justifyContent: 'space-between' }}>
        <small>Hyperapp starter</small>
        <div class={utils.group}>
          <small>
            <a href="https://github.com/loteoo/hyperapp-starter">[source code]</a>
          </small>
          <small>
            <a href="https://github.com/jorgebucaran/hyperapp">[hyperapp]</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
