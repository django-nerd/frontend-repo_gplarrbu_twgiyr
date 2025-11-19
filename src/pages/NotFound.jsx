import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="text-center px-6">
          <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
          <p className="mt-4 text-slate-600">The page you’re looking for can’t be found.</p>
          <Link to="/" className="mt-6 inline-flex items-center rounded-full bg-sky-600 text-white font-semibold px-5 py-3 hover:bg-sky-700">Return home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
