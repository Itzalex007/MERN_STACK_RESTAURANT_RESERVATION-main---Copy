import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Qualities from './components/Qualities';
import Team from './components/Team';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Signup from './components/Signup';
import SignupCreated from './Pages/Success/SignupCreated';
import Login from './components/Login';
import LoginCreated from './Pages/Success/LoginCreated';
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/signupcreated' element={<SignupCreated/>}/>
          <Route path='/logincreated' element={<LoginCreated/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/dishes' element={<Menu/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Qualities/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          
        </Routes>
        <Toaster/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
