import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header className="border-b border-border py-4">
        <div className="text-center text-xl font-bold text-foreground">
          Chatbot Educação
        </div>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  )
}
