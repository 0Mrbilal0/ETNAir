import axios from 'axios'

async function get<R>(url: string): Promise<R> {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
    const result: R = await axios.get<R>(url).then(response => response.data)
    console.log(result)
    return result
}

async function post<R, T>(url: string, data: T) {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
    const result: R = await axios.post<T, R>(url, data)
    return result
}

export {get, post}
