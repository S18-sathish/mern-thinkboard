
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HompePage from './pages/HompePage'
import Createpage from './pages/Createpage'
import NoteDetailPage from './pages/NoteDetailPage'


const App = () => {
  return (
      // <div data-theme="forest">

 <div className='relative h-full w-full'>
  <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
  [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00ff9d40_100%)]
  '/>
      <Routes>

      <Route path='/' element={<HompePage />}/>
      <Route path='/create' element={<Createpage/>}/>
       <Route path='/note/:id' element={<NoteDetailPage/>}/>
      </Routes>
     

      
    </div>
  )
}

export default App
