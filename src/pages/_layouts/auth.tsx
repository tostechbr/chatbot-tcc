import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 ">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <h1 className="text-2xl font-bold">DIMA</h1>
        <p className="mt-2 text-sm">
          Chatbot educacional &copy; DIMA | Chatbot -{' '}
          {new Date().getUTCFullYear()}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
