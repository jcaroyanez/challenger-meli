import axios from 'axios'

export default async function fetcher (url, options) {
    let response = null

    try {
        const { data } = await axios.request({
            url,
            ...options
        })
        response = data
    } catch (error) {
        return error.response
    }

    return response
}
