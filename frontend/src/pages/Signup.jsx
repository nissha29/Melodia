import React, { useState } from 'react'
import woman from '../assets/woman.png'
import { Eye, EyeOff, Mail, User, Lock, AlertTriangle } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../constants.js'

function Signup() {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate();

  const handleChange  = async(e)=>{
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post(
        `${URL}/api/user/signup`,
        formData,
        {
          withCredentials: true,
        }
      )
    }catch(err){
      if (err.response) {
        if (err.response.status === 400) {
          setError('User already exists');
        } else if (err.response.status === 500) {
          setError('Server error');
        } else {
          setError(err.response.data.message || `An error occurred ${err}`);
        }
      }
    }
  }
  
  return (
    <div className='bg-primary-bg flex sm:flex-row flex-col-reverse min-h-screen p-10 justify-center items-center'>
      <div className='flex flex-col gap-6 text-center justify-center items-center'>
        <div className='text-secondary-text lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-thin font-playwrite'>Signup to Melodia</div>
        <div className='border border-secondary-bg lg:w-[27rem] py-4 md:w-[23rem] sm:w-[21rem] rounded-xl p-4'>
        {error && (
                <div
                  className="flex items-center bg-red-800/20 border border-red-950 text-red-950 p-3 rounded-md mb-6 space-x-2 font-playwrite"
                  >
                  <AlertTriangle className="text-red-950" size={20} />
                  <p className="text-sm">{error}</p>
                </div>
          )}
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="space-y-2 flex flex-col justify-start">
              <label htmlFor="name" className="text-lg font-medium text-white text-left font-playwrite">
                Full Name
              </label>
              <div className="flex items-center border border-secondary-bg rounded-md focus-within:border-white transition-colors duration-300">
                <User className="m-2 text-secondary-text" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="user name"
                  className="w-full px-2 py-2 outline-none text-lg bg-transparent text-white placeholder-secondary-text"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 flex flex-col justify-start">
              <label htmlFor="name" className="text-lg font-medium text-white text-left font-playwrite">
                Email
              </label>
              <div className="flex items-center border border-secondary-bg rounded-md focus-within:border-white transition-colors duration-300">
                <Mail className="m-2 text-secondary-text" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="user email"
                  className="w-full px-2 py-2 outline-none text-lg bg-transparent text-white placeholder-secondary-text"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 flex flex-col justify-start">
              <label htmlFor="password" className="text-lg font-medium text-white text-left font-playwrite">
                Password
              </label>
              <div className="flex items-center border border-secondary-bg rounded-md focus-within:border-white transition-colors duration-300">
                <Lock className="m-2 text-secondary-text" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="user password"
                  className="w-full px-2 py-2 outline-none text-lg bg-transparent text-white placeholder-secondary-text"
                  required
                />
                <button
                  type="button"
                  onClick={()=>{
                    setShowPassword(prev => !prev)
                  }}
                  className="m-2 focus:outline-none hover:text-secondary-text"
                >
                  {showPassword ? (
                          <EyeOff className="text-white hover:text-secondary-text" />
                        ) : (
                          <Eye className="text-white hover:text-secondary-text" />
                        )}
                </button>
              </div>
            </div>
            <p className="text-sm text-[#ffffff86] text-left font-playwrite">
                Password must have: 8-50 chars, with lowercase, uppercase, number, and special character
            </p>
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between space-y-4 md:space-y-0">
              <button
                className="w-full lg:w-auto px-6 py-2 bg-secondary-bg font-playwrite text-white rounded-md hover:bg-[#111d13da] transition-colors duration-300 lg:text-lg font-semibold"
                type="submit"
              >
                Sign Up
              </button>
              <NavLink
                  to={"/signin"}
                  className="text-white hover:text-[#ffffffc2] hover:underline transition-colors duration-300 font-playwrite"
                >
                  Already have an account?
                </NavLink>
            </div>
          </form>
        </div>
        <div
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <button
            onClick={()=>{
              navigate("/")
            }}
            className="lg:px-44 md:px-36 sm:px-32 py-2 px-28 bg-secondary-bg text-white font-playwrite rounded-md hover:bg-[#111d13da] transition-colors duration-300 text-lgfont-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
      <div>
        <img src={woman} alt="woman" className='lg:w-80 lg:h-96 md:w-64 md:h-96 sm:h-[26rem] h-56' />
      </div>
    </div>
  )
}

export default Signup