import { useRoutes } from 'react-router'
import { LIST_ROUTES } from './routes/routes'

const App = () => {
  const routes = useRoutes(LIST_ROUTES)

  return (
    <div>
      {routes}
    </div>
  )
}

export default App
