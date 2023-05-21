import './App.css'
import RevealHeader from './lib/RevealHeader'
import { Link, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Basic from './pages/Basic';

function App() {

  return (
    <>
      <RevealHeader neutralColor={'white'} upColor={'#8694a8'}>
        <div className='flex flex-col flex-grow font-bold text-2xl p-4'>
          <Link to="/">React Reveal Header</Link>
          <Link to="/basic">Basic Usage</Link>
        </div>
      </RevealHeader>
      <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/basic' element={<Basic/>} />
      </Routes>
    </>
  )
}

export default App
