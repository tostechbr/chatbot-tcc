import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}
