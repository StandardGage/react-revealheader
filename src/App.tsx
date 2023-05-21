import './App.css'
import RevealHeader from './lib/RevealHeader'
import Advanced from './pages/Advanced';
import Basic from './pages/Basic';

function App() {

  return (
    <>
      <RevealHeader>
        <div className='flex flex-col flex-grow font-bold text-2xl p-4'>
          <div><a href='#'>React Reveal Header</a></div>
          <div className='flex justify-center space-x-5'>
            <div><a href='#basics'>Basics</a></div>
            <div><a href='#advanced'>Advanced</a></div>
          </div>
        </div>
      </RevealHeader>
      <Basic/>
      <Advanced/>
    </>
  )
}

export default App
