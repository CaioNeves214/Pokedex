import Header from './components/Header'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PokemonDetailPage from './pages/PokemonDetailPage.jsx'

function App() {
  return (
      <div>
        <Header />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
  )
}

export default App