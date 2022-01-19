import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Battle from './pages/Battle'
import Heroes from './pages/Heroes'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="battle" element={<Battle />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
