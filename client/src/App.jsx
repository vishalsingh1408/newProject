import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "@mantine/core/styles.css";
import { Toaster } from "sonner";
import Preferences from "./pages/preferences";
import { fetchProduct } from "./redux/slice/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Homepage = lazy(() => import("./pages/Homepage"));
const Profile = lazy(()=>import('./pages/Profile'))
const Category = lazy(()=>import('./components/Category'))

import ProtectedRoutes from "./components/ProtectedRoutes";
import LoadingSpinner from "./components/LoadingSpinner";
import PreferenceProtectRoute from "./components/PreferenceProtectRoutes";
import Footer from './components/Footer';
import About from './pages/AboutPage';
console.log(Homepage);
function App() {
  return (
    <div>
      <Navbar />

      <Toaster />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<ProtectedRoutes />}>

          <Route path="/home" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route element = {<PreferenceProtectRoute/>}>
               <Route path="/preferences" element={<Preferences />} />
            </Route>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Category/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

// import React from 'react';

// import { useState } from 'react';
// import { Button } from '@mantine/core';
// import { useSelector ,useDispatch } from 'react-redux';
// import { increment,decrement } from './redux/slice/counterSlice';
// function App() {
//   // const [count, setCount] = useState(0);
// const {count} = useSelector((state)=>state.count)

// const dispatch = useDispatch()
//   return (
//     <div>
//       <p>{count}</p>
//       <Button onClick={() => dispatch(increment())}>inCrement</Button>
//       <Button onClick={() => dispatch(decrement())}>decrement</Button>
//       <Button onClick={() => setCount(0)}>reset</Button>
//     </div>
//   );
// }

// export default App;

//toolkit

// //initialState => {
//   count : 0
// }

//reducer function =>

//createSlice() =>
