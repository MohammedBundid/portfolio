import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import { ThemeProvider } from './ThemeContext'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Blogpage from './pages/blog/Blogpage'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blogpage />} />
          <Route path='/portfolio' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App