import { useState } from 'react'

import TodoLogo from './assets/Logo.svg'
import './App.scss'

function App() {
  return (
    <>
      <header className='header'>
        <img src={TodoLogo}/>
      </header>
    </>
  )
}

export default App
