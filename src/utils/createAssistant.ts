// src/utils/createAssistant.ts

import apiClient from './apiClient'

const createAssistant = async () => {
  try {
    const response = await apiClient.post('/assistants', {
      instructions:
        'You are a personal math tutor. Write and run code to answer math questions.',
      name: 'Math Tutor',
      tools: [{ type: 'code_interpreter' }],
      model: 'gpt-4',
    })

    return response.data
  } catch (error) {
    console.error('Error creating assistant:', error)
    throw error
  }
}
