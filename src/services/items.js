import fetcher from '../util/fetcher'

export default async function itemsFetch (url) {
    const response = await fetcher(url)
    return response
}
