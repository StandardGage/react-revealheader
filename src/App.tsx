import React from 'react';
import './App.css'
import RevealHeader from './RevealHeader'
import Advanced from './pages/Advanced';
import Basic from './pages/Basic';

function App() {

  return (
    <>
      <RevealHeader neutralColor='bg-neutral-500' upColor='bg-red-500'>
        <div className='flex bg-red flex-col flex-grow font-bold text-black text-2xl p-4'>
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
