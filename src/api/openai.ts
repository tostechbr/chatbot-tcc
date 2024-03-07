// src/api/openai.ts
import axios from 'axios'

const REACT_APP_OPENAI_API_KEY =
  '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'
// Configure o Axios com a chave da API e o cabeçalho beta necessário.
const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
    'OpenAI-Beta': 'assistants=v1',
    'Content-Type': 'application/json',
  },
})

export default openaiApi
