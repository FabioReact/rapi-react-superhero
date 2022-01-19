import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import Battle from './pages/Battle'
import Heroes from './pages/Heroes'
import Home from './pages/Home'
import Search from './pages/Search'
import Cities from './pages/Cities'
import { reducer } from './store/cities'

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="battle" element={<Battle />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="search" element={<Search />} />
          <Route path="cities" element={<Cities />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
