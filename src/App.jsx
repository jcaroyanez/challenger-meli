import { useRoutes } from 'react-router'
import { SearchContext } from './context/search'
import { LIST_ROUTES } from './routes/routes'
import { HelmetProvider } from 'react-helmet-async'

const App = () => {
  const routes = useRoutes(LIST_ROUTES)

  return (
    <HelmetProvider>
      <SearchContext>
        <div>
          {routes}
        </div>
      </SearchContext>
    </HelmetProvider>
  )
}

export default App
