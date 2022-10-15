import useSWR from 'swr'
import { URL_ITEMS } from '../definition/constant'
import itemsFetch from '../services/items'

export default function useItems (textSearch) {
    const url = `${URL_ITEMS}${textSearch}`
    const { data } = useSWR([url], itemsFetch, { revalidateOnFocus: false })
    return data
}
