// src/services/openai.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ajuste para o endereço do seu backend
})

export const sendMessageToChat = async (message: string) => {
  const response = await api.post('/chat', { message })
  return response.data
}
