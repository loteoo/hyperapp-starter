import utils from '/src/styles/utils.module.css'

const NotFoundPage = () => (
  <div class={utils.container}>
    <h1>404.</h1>
    <p>Page not found.</p>
    <a href="/">Go back to home page</a>
  </div>
)

export default NotFoundPage
