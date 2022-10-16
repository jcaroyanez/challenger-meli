import Home from '../components/Home/Home'
import Listing from '../components/Listing/Listing'
import Detail from '../components/Detail/Detail'

/* export const LIST_ROUTES = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/items',
        element: <Listing />
    },
    {
        path: '/detail/:id',
        element: <Detail />
    }
] */

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
                path: '/detail/:id',
                element: <Detail />
            }
        ]
}]
