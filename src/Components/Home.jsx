import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    axios.post(import.meta.env.VITE_BASE_URL + '/user/reset-password/v1', {email:'ayushnamdev2004@gmail.com'}).then((res) => console.log(res.data));
  })

  return (
    <div>Home</div>
  )
}

export default Home