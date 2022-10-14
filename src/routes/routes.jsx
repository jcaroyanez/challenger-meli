import Home from '../components/home/Home'
import Listing from '../components/listing/Listing'
import Detail from '../components/detail/Detail'

export const LIST_ROUTES = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/items',
        element: <Listing />
    },
    {
        path: 'Detail',
        element: <Detail />
    }
]
