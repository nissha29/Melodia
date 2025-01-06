import React from 'react'
import woman from '../assets/woman.png'
import { Eye, Mail, User, Lock } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <div className='bg-primary-bg flex sm:flex-row flex-col-reverse min-h-screen p-10 justify-center items-center'>
      <div className='flex flex-col gap-6 text-center justify-center items-center'>
        <div className='text-secondary-text lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-thin font-playwrite'>Signup to Melodia</div>
        <div className='border border-secondary-bg lg:w-[27rem] lg:h-[27.5rem] md:w-[23rem] md:h-[30rem] sm:w-[21rem] sm:h-[40rem] rounded-xl p-4'>
          <form className='flex flex-col gap-4'>
            <div className="space-y-2 flex flex-col justify-start">
              <label htmlFor="name" className="text-lg font-medium text-white text-left font-playwrite">
                Full Name
              </label>
              <div className="flex items-center border border-secondary-bg rounded-md focus-within:border transition-colors duration-300">
                <User className="m-2 text-secondary-text" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  //   value=""
                  //   onChange=""
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
              <div className="flex items-center border border-secondary-bg rounded-md focus-within:border transition-colors duration-300">
                <Mail className="m-2 text-secondary-text" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  //   value=""
                  // onChange=""
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
              <div className="flex items-center border border-secondary-bg rounded-md focus-within:border transition-colors duration-300">
                <Lock className="m-2 text-secondary-text" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  // value=""
                  // onChange=""
                  placeholder="••••••••"
                  autoComplete="user password"
                  className="w-full px-2 py-2 outline-none text-lg bg-transparent text-white placeholder-secondary-text"
                  required
                />
                <button
                  type="button"
                  // onClick=""
                  className="m-2 focus:outline-none hover:text-secondary-text"
                >
                  <Eye className="text-white hover:text-secondary-text" />
                  {/* {showPassword ? (
                          <EyeOff className="text-slate-400 hover:text-slate-300" />
                        ) : (
                          <Eye className="text-slate-400 hover:text-slate-300" />
                        )} */}
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