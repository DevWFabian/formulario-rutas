import './App.css'
import React from 'react'
import { Routes,Route ,Link} from 'react-router-dom'
import { Footer ,Header} from './components'
import {LogIn,SignUp,Dashboard,Home} from "./router"
const NotFoundPage = ()=>{
  return <div>No existe la pagina</div>
}
function App() {

  return (
    <main>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/LogIn' element={<LogIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </main>
  )
}

export default App
