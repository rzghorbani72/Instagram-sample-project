import axios from 'axios'
const API_ROOT = 'http://localhost:3001/api'

class ApiService {
  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    this.client = client
  }

  get(path) {
    return this.client.get(path).then(response => response.data)
  }

  post(path, payload){
    return this.client.post(path, payload).then(response => response.data)
  }

}

export default new ApiService()
