import logo from '/assets/favicon.png'

import Link from '/utils/routing/Link'

import styles from './logo.css'

const Logo = () => (
  <Link href="/" class={styles.logo}>
    <img src={logo} alt="Main logo" width="32" height="32" />
  </Link>
)

export default Logo
