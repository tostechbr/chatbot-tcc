// src/lib/apiClient.ts
import axios from 'axios'

// Substitua 'your_api_key' pela sua chave de API real.
const OPENAI_API_KEY = 'sk-M2QY7TkBKhVe8tzcDF3nT3BlbkFJsN9xv18tspX8WkzC0m2'

const apiClient = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
    'OpenAI-Beta': 'assistants=v1',
  },
})

export default apiClient
