import React from 'react'

//Icons
import {RiMailFill} from "react-icons/ri"

const Login = () => {
  return (
    <div className='bg-secondary-100 p-8 rounded-xl'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8'>Iniciar sesión</h1>
      <form >
        <button className='flex items-center justify-center py-2 px-4 gap-4  bg-secondary-900 w-full rounded-full mb-8'>
          <img src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png' 
          className='w-4 h-4' />
          Ingresa con google
          </button>
        <div className='relative'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input 
          type="email" 
          className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
          placeholder='Correo electrónico' 
           />
        </div>
      </form>
    </div>
  )
}

export default Login