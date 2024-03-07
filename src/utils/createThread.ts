// src/utils/createThread.ts
// src/utils/addMessageToThread.ts

import apiClient from './apiClient'

const createThread = async () => {
  try {
    const response = await apiClient.post('/threads', {})
    return response.data
  } catch (error) {
    console.error('Error creating thread:', error)
    throw error
  }
}

const addMessageToThread = async (threadId: string, messageContent: string) => {
  try {
    const response = await apiClient.post(`/threads/${threadId}/messages`, {
      role: 'user',
      content: messageContent,
    })
    return response.data
  } catch (error) {
    console.error('Error adding message to thread:', error)
    throw error
  }
}
