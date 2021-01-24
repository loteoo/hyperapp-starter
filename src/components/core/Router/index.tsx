import HomePage from '/pages/HomePage'
import SecondaryPage from '/pages/SecondaryPage'
import PageNotFound from '/pages/PageNotFound'

const Router = (state) => {
  if (state.location.path === '/secondary') {
    return <SecondaryPage {...state} />
  }
  if (state.location.path === '/') {
    return <HomePage {...state} />
  }
  return <PageNotFound />
}

export default Router
