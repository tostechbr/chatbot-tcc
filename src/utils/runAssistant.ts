// src/utils/runAssistant.ts
import apiClient from './apiClient'

const runAssistant = async (threadId: string, assistantId: string) => {
  try {
    const response = await apiClient.post(`/threads/${threadId}/runs`, {
      assistant_id: assistantId,
      // Você pode incluir instruções adicionais aqui, se necessário
    })
    return response.data
  } catch (error) {
    console.error('Error running assistant:', error)
    throw error
  }
}
