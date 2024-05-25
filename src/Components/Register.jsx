import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegisterFormSubmitClick = async(e) => {
        console.log('postsignup', userData);
        const res = await axios.post(import.meta.env.VITE_BASE_URL + '/user/register',userData);
        console.log(res.data);
        navigate('/');
    }

  return (
    <>
        <div className="flex bg-gray-50 min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-[1.5vw] font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          
          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  value={userData.name}
                  onChange={(e) => setUserData(prev => ({...prev,name:e.target.value}))}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                  UserName
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="userName"
                  required
                  value={userData.username}
                  onChange={(e) => setUserData(prev => ({...prev,username:e.target.value}))}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={userData.email}
                  onChange={(e) => setUserData(prev => ({...prev,email:e.target.value}))}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={userData.password}
                  onChange={(e) => setUserData(prev => ({...prev,password:e.target.value}))}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                 Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={userData.confirmPassword}
                  onChange={(e) => setUserData(prev => ({...prev,confirmPassword:e.target.value}))}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleRegisterFormSubmitClick}
                className="flex w-full justify-center rounded-md bg-[#68D2D2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#56b9b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Allready a member?{' '}
            <Link to='/signup' href="#" className="font-semibold leading-6 text-[#68D2D2] hover:text-[#56b9b9]">
                Login Now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register;