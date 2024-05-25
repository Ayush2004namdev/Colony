import React, { useState } from 'react'
import Loading from './Components/Loading'
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import ResetPassword from './Components/ForgetRouter';

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <BrowserRouter>
      {loading && <Loading />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword/:id" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App