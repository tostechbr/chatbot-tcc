// components/ui/Header.js
import { Link } from 'react-router-dom'

import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black p-4 text-white">
      <div>
        <Link to="/" className="text-xl font-bold">
          Chatbot
        </Link>
      </div>
      <div>
        <Link to="/login" className="mr-6">
          Login
        </Link>
        <a
          href="https://github.com/your-github-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <Button className="ml-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Deploy to Vercel
        </Button>
      </div>
    </header>
  )
}

export default Header
