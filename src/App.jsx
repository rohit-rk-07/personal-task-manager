import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Completed from './pages/Completed';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TodoContextProvider from './context/TodoContextProvider';
import './style.css'

function App() {

  return (
    <div className='app'>
      <TodoContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/completed" element={<Completed />}/>
          </Routes>
        </BrowserRouter>
      </TodoContextProvider>
    </div>
  )
}

export default App
