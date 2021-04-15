import Link from '/src/utils/routing/Link'

import utils from '/src/styles/utils.module.css'

const NotFoundPage = () => (
  <div class={utils.container}>
    <h1>404.</h1>
    <p>Page not found.</p>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default NotFoundPage
