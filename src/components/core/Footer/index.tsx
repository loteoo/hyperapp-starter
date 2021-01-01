import utils from '/styles/utils.css'
import styles from './footer.css'

const Footer = () => (
  <footer class={styles.footer}>
    <div class={[utils.container, styles.inner]}>
      <a
        href="https://github.com/loteoo/hyperapp-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        [source code]
      </a>
      <a
        href="https://github.com/jorgebucaran/hyperapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        hyperapp
      </a>
    </div>
  </footer>
)

export default Footer
