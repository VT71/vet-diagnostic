import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <footer></footer>
    </>
  )
}

export default App
