import logo from '/src/assets/logo.png'

import styles from './logo.module.css'

const Logo = () => (
  <a href="/" class={styles.logo}>
    <img src={logo} alt="Main logo" width="32" height="32" />
  </a>
)

export default Logo
