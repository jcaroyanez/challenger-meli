import Home from '../components/Home/Home'
import Listing from '../components/Listing/Listing'
import Detail from '../components/Detail/Detail'
import NotFound from '../components/NotFound/NotFound'

export const LIST_ROUTES = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/items',
                element: <Listing />
            },
            {
                path: '/items/:id',
                element: <Detail />
            },
            {
                path: '/:id',
                element: <Detail />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
}]
