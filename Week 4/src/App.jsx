import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Header/>
          <Main/>
          <Footer/>
      </div>
    </>
  )
}

export default App
