import axios from 'axios'

const fetcher = {
	async get<T = any>(url: string): Promise<T> {
		return axios.get(url)
	}
}

const BASE_URL = 'http://localhost:4000'

// export default fetcher
export { fetcher as default, BASE_URL}