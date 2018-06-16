import axios from 'axios'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 1000,
      headers: localStorage.getItem('uuId'),
      adapter: (axios.defaults.adapter),
    })
  }
}
