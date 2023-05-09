import axios from 'axios'
import Constants from 'expo-constants'

const api = axios.create({
  // baseURL: `http://127.0.01:8000/api/`,
  baseURL: `http://${Constants.manifest.debuggerHost.split(':').shift()}:8000/api/`,
})

export default api