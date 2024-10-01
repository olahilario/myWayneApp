import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import About from './pages/About'
import BatmanHome from './pages/BatmanHome'
import Map from './pages/Map'
import HeaderBatman from './components/HeaderBatman'


function App() {
  
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>

      {/* <Login/> */}
      {/* <About/> */}
      {/* <BatmanHome/> */}
      <Map />
      {/* <HeaderBatman/> */}


      {/* <BrowserRouter>
        <Routes>
          {!isLogged ? (
            <Route path="/" element={<Login setIsLogged={setIsLogged} isLogged={isLogged} />}/>
          ) : <Route path="/" element={<About setIsLogged={setIsLogged} isLogged={isLogged} />}/>
          }
          <Route path="about" element={<About setIsLogged={setIsLogged} isLogged={isLogged} />}/>
          

        </Routes>
      
      </BrowserRouter> */}
    </>
  )
}

export default App
