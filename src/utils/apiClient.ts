// src/lib/apiClient.ts
import axios from 'axios'

// Substitua 'your_api_key' pela sua chave de API real.
// const OPENAI_API_KEY = 'sk-M2QY7TkBKhVe8tzcDF3nT3BlbkFJsN9xv18tspX8WkzC0m2'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export default apiClient
