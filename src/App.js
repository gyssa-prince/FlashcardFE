import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './components/navbar.js'
import Flashcard from './components/Flashcard.js'
import Dashboard from './components/dashboard.js'
import AdminNav from './components/AdminNav.js'
import AddFlashcard from './components/AddFlashcard.js';
import Login from './components/Login.js';
function App() {
 return(
   <div>
      <BrowserRouter>
            <Routes>
            <Route exact path="/" element={[<Navbar/>,<Flashcard/>]}></Route>
            <Route exact path="/login" element={[<Login/>]}></Route>
            <Route exact path="/dashboard" element={[<AdminNav/>,<Dashboard/>]}></Route>
            <Route exact path="/dashboard/add" element={[<AdminNav/>,<AddFlashcard/>]}></Route>
            </Routes>
        </BrowserRouter>
   </div>
 )
}
export default App