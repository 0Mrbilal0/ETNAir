import axios from 'axios'

class Requests {
    async get<R>(url: string): Promise<R> {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        const result: R = await axios.get<R>(url).then(response => response.data)
        return result
        // a completer
    }

    async post<R,T>(url: string, data: T) {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        const result: R = await axios.post<T,R>(url, data)
        return result
        // a completer
    }
}

export default Requests
