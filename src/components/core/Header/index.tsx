import Logo from '/src/components/core/Logo'

import utils from '/src/styles/utils.module.css'
import styles from './header.module.css'

const Header = () => (
  <header class={styles.header}>
    <div class={[utils.container, styles.inner]}>
      <Logo />
      <a href="/secondary">Secondary page</a>
      <a href="/counter">Counter page</a>
    </div>
  </header>
)

export default Header
