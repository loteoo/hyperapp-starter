import logo from '/src/assets/logo.png'

import Link from '/src/utils/routing/Link'

import styles from './logo.module.css'

const Logo = () => (
  <Link href="/" class={styles.logo}>
    <img src={logo} alt="Main logo" width="32" height="32" />
  </Link>
)

export default Logo
