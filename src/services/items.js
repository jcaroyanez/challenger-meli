import fetcher from '../util/fetcher'
import { mapperItem } from '../util/mapper'

export async function itemsFetch (url) {
    const response = await fetcher(url)
    return response
}

export async function itemFetch (url) {
    const response = await fetcher(url)
    return mapperItem(response)
}
