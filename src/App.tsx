import './App.css'
import RevealHeader from './lib/RevealHeader'

function App() {

  return (
    <>
      <RevealHeader neutralColor={'white'} upColor={'gray'}>
        <div className='font-bold text-2xl p-4'>
          <div>React Reveal Header</div>

        </div>
      </RevealHeader>
      <div className='flex h-screen w-screen bg-red-800 font-bold text-2xl text-white items-center justify-center'>Scroll down to see Header dissapear</div>
      <div className='flex h-screen w-screen bg-blue-800 font-bold text-2xl text-white items-center justify-center'>Scroll up to see Header reappear</div>

    </>
  )
}

export default App
