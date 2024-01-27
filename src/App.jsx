import React from 'react';
import myState from './context/data/mystate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import LogIn from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp";
import AddNote from "./pages/addnote/AddNote";
import Profile from "./pages/profile/Profile";
import UpdateNote from "./pages/updateNote/UpdateNote";
import NoPage from "./pages/nopage/NoPage";

function App() {
  return (
    <>
    <myState>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/addnote' element={<AddNote/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/updateNote' element={<UpdateNote/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
        </BrowserRouter>
    </myState>
    </>
  )
}

export default App