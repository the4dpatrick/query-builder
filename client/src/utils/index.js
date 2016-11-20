import axios from 'axios'
import qs from 'qs'
const isDev = process.env.NODE_ENV === 'development'
const API_URL = isDev ? 'http://localhost:8080/' : 'http://example.com/'

export function search(query) {
  return axios.get(`${API_URL}?${qs.stringify(query)}`)
}
