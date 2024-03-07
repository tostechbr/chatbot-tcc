import React, { FormEvent, useEffect, useState } from 'react'

import { createAssistant } from '@/helpers/createAssistant'
// Supondo que você tenha uma função createAssistant corretamente implementada

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export function Chatbot() {
  const [assistantId, setAssistantId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    const initAssistant = async () => {
      try {
        const assistant = await createAssistant()
        setAssistantId(assistant.id)
        // Inicia a conversa com uma mensagem de boas-vindas do bot
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: 'welcome',
            text: 'Olá, como posso ajudá-lo hoje?',
            sender: 'bot',
          },
        ])
      } catch (error) {
        console.error('Could not initialize assistant:', error)
      }
    }

    initAssistant()
  }, [])

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault()

    // Evita enviar mensagens vazias
    if (!newMessage.trim()) return

    // Adiciona a nova mensagem do usuário ao estado
    const userMessage: Message = {
      id: Date.now().toString(), // Gera um ID único temporário
      text: newMessage,
      sender: 'user',
    }
    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
      // Aqui você adicionará a lógica para enviar a mensagem para o assistente OpenAI
      // e processar a resposta. Isso é um placeholder para a funcionalidade real.
      // ...
    } catch (error) {
      console.error('Error sending message:', error)
    }

    // Limpa o campo de entrada após enviar a mensagem
    setNewMessage('')
  }

  return (
    <main className="flex h-screen flex-col bg-background p-6 text-foreground">
      <header className="mb-4">
        <h1 className="text-lg font-bold text-primary-foreground">
          Chatbot Educação
        </h1>
      </header>

      <section className="flex-1 overflow-y-auto">
        {/* Lista de mensagens */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`my-2 rounded-md p-2 ${
              message.sender === 'bot'
                ? 'bg-secondary text-secondary-foreground'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            {message.text}
          </div>
        ))}
      </section>

      <footer>
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-md border-input bg-card p-2 text-card-foreground"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-4 text-primary-foreground"
          >
            Enviar
          </button>
        </form>
      </footer>
    </main>
  )
}
