import useSWR from 'swr'
import { URL_ITEM, URL_ITEMS } from '../definition/constant'
import { itemsFetch, itemFetch } from '../services/items'

export function useItems (textSearch) {
    const url = `${URL_ITEMS}${textSearch}`
    const { data } = useSWR([url], itemsFetch, { revalidateOnFocus: false })
    return data
}

const DEFAULT_DATA = { item: null }

export function useItem (itemId) {
    const url = `${URL_ITEM}${itemId}`
    const { data } = useSWR([url], itemFetch, { revalidateOnFocus: false })
    return data || DEFAULT_DATA
}
