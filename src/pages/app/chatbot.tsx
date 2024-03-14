import React, { FormEvent, useState } from 'react'

import { sendMessageToChat } from '@/api/openai'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

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
      const data = await sendMessageToChat(newMessage) // Chame a função com a mensagem do usuário
      // Certifique-se de que o backend retorna a estrutura esperada
      if (data && data.response) {
        // Verifique se 'data.response' está alinhado com a estrutura de sua resposta
        const responseText =
          typeof data.response === 'string'
            ? data.response
            : JSON.stringify(data.response)
        const botMessage: Message = {
          id: Date.now().toString(),
          text: responseText, // Use a string tratada aqui
          sender: 'bot',
        }
        setMessages((prevMessages) => [...prevMessages, botMessage])
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }

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
