import useSWR from 'swr'
import { URL_ITEMS } from '../definition/constant'
import { itemsFetch, itemFetch } from '../services/items'

export function useItems (textSearch) {
    const url = `${URL_ITEMS}?q=${textSearch}`
    const { data, error } = useSWR([url], itemsFetch, { revalidateOnFocus: false })
    return { data, error }
}

export function useItem (itemId) {
    const url = `${URL_ITEMS}/${itemId}`
    const { data, error } = useSWR([url], itemFetch, { revalidateOnFocus: false })
    return { data, error }
}
