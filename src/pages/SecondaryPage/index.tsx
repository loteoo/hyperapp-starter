import Link from '/utils/routing/Link'

import utils from '/styles/utils.css'

const SecondaryPage = () => (
  <div class={utils.container}>
    <h1>Hello from secondary page</h1>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default SecondaryPage
