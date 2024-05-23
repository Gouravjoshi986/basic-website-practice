import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-slate-100'>
    <div className='h-screen'>
    <img src='../../public/wave.svg' className='relative'/>
     <div className='absolute bottom-1 left-10 text-black text-4xl font-bold h-full '>
     <img src='../../public/avatar.png' className='h-[500px] w-[320px]'/></div>
     <div className='text-white absolute top-0 right-0 m-2 w-screen font-bold flex flex-col justify-center items-center p-2'>
     <div className=' text-4xl p-2 m-3'>About Us</div>
     <div className='flex justify-end items-center'>
     <div className='text-lg flex w-[50%] justify-end p-6 m-2'>
     Otherwise speaking a number of new brand appraches has been tested  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure
     </div>
     </div>
     </div>
    </div>
     <div className='flex flex-row h-screen w-full'>
        <div className='flex basis-1/2 justify-center items-center p-4 text-xl text-black font-medium'>
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who choos
        </div>
        <div className='flex basis-1/2 justify-center items-center'>
            <img src='../../public/avatar2.png' className=' h-[400px] w-[500px]'/>
        </div>
     </div>
    </div>
  )
}

export default AboutUs