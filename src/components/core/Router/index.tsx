import HomePage from '/pages/HomePage'
import SecondaryPage from '/pages/SecondaryPage'
import CounterPage from '/pages/CounterPage'
import NotFoundPage from '/pages/NotFoundPage'

const Router = (state) => {
  if (state.location.path === '/') {
    return <HomePage {...state} />
  }
  if (state.location.path === '/secondary') {
    return <SecondaryPage {...state} />
  }
  if (state.location.path === '/counter') {
    return <CounterPage {...state} />
  }
  return <NotFoundPage />
}

export default Router
