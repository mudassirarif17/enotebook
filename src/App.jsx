import React from 'react';
import MyState from './context/data/MyState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import LogIn from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp";
import AddNote from "./pages/addnote/AddNote";
import Profile from "./pages/profile/Profile";
import UpdateNote from "./pages/updateNote/UpdateNote";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from './pages/dashboard/Dashboard';
import Forgetpassword from './pages/forgetpassword/Forgetpassword';
import Resetpassword from './pages/resetpassword/Resetpassword';


function App() {
  return (
    <>
    <MyState>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/addnote' element={<AddNote/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/forgot-password' element={<Forgetpassword/>}/>
          <Route path='/reset-password' element={<Resetpassword/>}/>
          <Route path='/updateNote/:id' element={<UpdateNote/>}/>
          {/* <Route path='*' element={<NoPage/>}/> */}
        </Routes>
        </BrowserRouter>
    </MyState>
    </>
  )
}

export default App