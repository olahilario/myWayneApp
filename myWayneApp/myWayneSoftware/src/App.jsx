import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import About from './pages/About'


function App() {
  
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isLogged ? (
            <Route path="/" element={<Login setIsLogged={setIsLogged} isLogged={isLogged} />}/>
          ) : <Route path="/" element={<About setIsLogged={setIsLogged} isLogged={isLogged} />}/>
          }
          <Route path="about" element={<About setIsLogged={setIsLogged} isLogged={isLogged} />}/>
          

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
