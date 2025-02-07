import './App.css'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex w-full h-screen bg-gray-900 align-center justify-center'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/fun-stuff" element={<p>Soon to come</p>} />
          <Route path="/secret" element={<p>Soon to come</p>} />
        </Routes>
      </div>
    </>
  )
}

export default App
