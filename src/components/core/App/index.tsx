import '/styles/base.css'

import Header from '/components/core/Header'
import Router from '/components/core/Router'
import Footer from '/components/core/Footer'

const App = (state) => (
  <main>
    <Header />
    <Router {...state} />
    <Footer />
  </main>
)

export default App
