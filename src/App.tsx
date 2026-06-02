import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home'
import Footer from './components/sections/Footer/Footer'

function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
