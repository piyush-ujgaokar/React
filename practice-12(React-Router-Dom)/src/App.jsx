import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NavBar2 from './components/NavBar2'

const App = () => {
  return (
    <div className='h-screen w-full relative bg-black text-white'>
        <NavBar/>
        <NavBar2/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Products/>}>
              <Route path='men' element={<Men/>}/>
              <Route path='women' element={<Women/>}/>
              <Route path='kid' element={<Kids/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:courseId' element={<CourseDetail/>}/>

          <Route path='/contact' element={<Contact/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>

        <Footer/>
    </div>
  )
}

export default App