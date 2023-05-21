import './App.css'
import RevealHeader from './lib/RevealHeader'

function App() {

  return (
    <>
      <RevealHeader neutralColor={'black'} upColor={'white'}><div className='outer'><div className='flex h-64 justify-center items-center'>hi</div></div></RevealHeader>
      <div className='h-screen w-screen bg-red-800'>Hey</div>
      <div className='h-screen w-screen bg-blue-800'>Hey</div>
    </>
  )
}

export default App
