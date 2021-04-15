import utils from '/src/styles/utils.module.css'
import styles from './footer.module.css'

const Footer = (state) => (
  <footer class={styles.footer}>
    <div class={utils.container}>
      <details>
        <summary>Show app state</summary>
        <pre>
          <code>{`state: ${JSON.stringify(state, null, 2)}`}</code>
        </pre>
      </details>
      <div class={styles.links}>
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
    </div>
  </footer>
)

export default Footer
