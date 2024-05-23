import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen'>
        <div className='h-[50vh] flex flex-row justify-center relative z-10'>
            <div className='basis-1/2 flex justify-center items-center h-full w-fit'>
                <img src='../../public/avatar3.png' className='h-[60vh] w-fit'/>
            </div>
            <div className='basis-1/2 flex justify-center items-center'>
                <form action='#' className='h-full w-full flex flex-col justify-center items-center space-y-2'>
                    <div className='w-[35vw] h-fit p-1'>
                        <input type="text" 
                               className="shadow-sm bg-gray-50 text-gray-900  
                                          text-sm rounded-sm block w-full p-2.5" 
                               placeholder="Enter Name"
                               required/>
                    </div>
                    <div className='w-[35vw] h-fit p-1'>
                    <input type="Email" 
                           className="shadow-sm bg-gray-50 text-gray-900  
                                          text-sm rounded-sm block w-full p-2.5" 
                           placeholder="abc@gmail.com" 
                           required /> 
                    </div>
                    <div className='w-[35vw] h-[20vh] p-1'>
                    <textarea rows="4" 
                              className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-50 rounded-sm  
                                         shadow-sm" 
                              placeholder="Query/Suggestion..."/> 
                    </div>
                    <button type='submit' className='bg-blue-500 text-white rounded-sm w-[25vw] align-middle p-2'>Submit</button>
                </form>
            </div>
        </div>
        <div className='absolute z-10 bottom-0 left-0 h-[50vh] w-full flex flex-row
        justify-center items-center text-white'>
            <div className='basis-1/2 flex flex-col justify-center items-center space-y-2 p-2 m-1 font-medium text-lg'>
                <span className='w-fit h-fit'>Logo</span>
                <p className='w-[50%] h-fit'>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,</p>
            </div>
            <div className='basis-1/2 flex flex-row justify-center items-center space-x-2 p-2 m-1 font-medium text-lg'>
                <div className='basis-1/4 h-full flex flex-col space-y-3 justify-center items-start'>
                    <a href='/' className='m-1 font-bold text-2xl'>Home</a>
                    <a href='/about' className='m-1 font-bold text-2xl'>About us</a>
                    <a href='/login' className='m-1 font-bold text-2xl'>Login</a>
                </div>
                <div className='basis-3/4 flex flex-col space-y-3 justify-center items-start'>
                    <span className='m-1 font-medium text-2xl'>Address</span>
                    <span className='m-1 font-medium text-2xl'>mail@gmail.com</span>
                </div>
            </div>
        </div>
        <img src="../../public/wave.svg" className='rotate-180 absolute z-0 bottom-0 left-0'/>
    </div>
  )
}

export default Contact