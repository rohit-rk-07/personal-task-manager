import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom';
import Completed from './pages/Completed';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TodoContextProvider from './context/TodoContextProvider';
import './style.css'

function App() {

  return (
    <div className='app'>
      <TodoContextProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/completed" element={<Completed />}/>
          </Routes>
        </HashRouter>
      </TodoContextProvider>
    </div>
  )
}

export default App
