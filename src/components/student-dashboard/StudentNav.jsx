// import React from 'react'
import image from '../../assets/collegeLogo.png'
import { HiBellAlert } from "react-icons/hi2";

function NavBar() {
  return (
    <div>
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between border-b-2  border-orange-500 ">
    
    <div className="flex items-center justify-around gap-3 "> 
        <img src={image} alt="logo" className="w-20 h-20 ml-4"/>
  <button className="bg-orange-500 p-2 rounded-lg relative h-12 w-12">
    <div className='flex justify-center items-center'>
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
    
        <HiBellAlert className='h-6 w-6 text-orange-500 ' />
        </div>
        </div>
        <div className="bg-red-500 text-white text-xs rounded-full  absolute top-0 right-0">
        <p>10</p>
        </div>
  </button>

    </div>

<div className='flex justify-center items-center mr-5'>
  <div className='text-black '>
    <p className="mb-2">student@user</p>
    <p>student@gmail.com</p>
    

  </div>
  <div className=" border-2 border-orange-500 rounded-full"><img src="https://via.placeholder.com/30" alt="Foto Perfil" className="rounded-full h-12 w-12 "/></div>
  </div>
  
</div>


    </div>
  )
}

export default NavBar