import { useState } from 'react'
import Textarea from 'react-textarea-autosize'

import { sendMessageToChat } from '@/api/openai'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = async (event) => {
    event.preventDefault()

    if (!newMessage.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
      // Utilize a função sendMessageToChat para enviar a mensagem
      const responseData = await sendMessageToChat(newMessage)

      // Aqui você pode adicionar a resposta do chat ao estado, por exemplo
      const botMessage = {
        id: Date.now().toString(),
        text: responseData.response, // Assumindo que o backend retorna { response: "texto da resposta" }
        sender: 'bot',
      }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
    }

    setNewMessage('')
  }

  return (
    <>
      <Header />
      <main className="flex h-screen flex-col bg-background p-6 text-foreground">
        <section className="flex-1 overflow-y-auto border">
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
          <form onSubmit={handleSendMessage}>
            <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
              <Textarea
                tabIndex={0}
                placeholder="Send a message."
                className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                name="message"
                rows={1}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <div className="absolute right-0 top-[13px] sm:right-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button type="submit" size="icon">
                      <span className="sr-only">Send message</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Send message</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </form>
        </footer>
      </main>
    </>
  )
}
