// import React from 'react'
import { Link } from 'react-router-dom'
function Requests() {
  return (
    <>

<div className="mt-8 bg-white p-4 shadow rounded-lg"> 
            
            <div className='flex flex-row justify-center bg-orange-500 p-2 mr-56 ml-56 rounded-full '>
            <h2 className="text-white text-lg font-bold p-2 "> طلبات التسجيل </h2>
            </div>
            <div className="my-1"></div> 
            <div className="bg-orange-500 h-px mb-6"></div>
            <button className='w-full'>
              <Link to='/admin-studentdata'>
                
              <div className="flex flex-row justify-between items-center border-2 border-orange-500 mb-4 rounded-lg">
                        <div className="py-2 px-4  "><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10 border-2 border-orange-500"/></div>
                        <div className="py-2 px-4 ">Name</div>
                        <div className="py-2 px-12 ">xxxxxxx@gmail.com</div>
                    </div>
              </Link>
            </button>
        </div>
  
    
    
    </>
   


        
   
  )
}

export default Requests