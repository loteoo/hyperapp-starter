import Header from '/src/components/core/Header'
import Router from '/src/components/core/Router'
import Footer from '/src/components/core/Footer'

const App = (state) => (
  <main>
    <Header />
    <Router {...state} />
    <Footer {...state} />
  </main>
)

export default App
