import React from 'react'

export default function ThreeSteps() {
  return (
    <div className='bg-[#fff9ee] py-[100px] my-[125px] relative'>
        <div className='absolute top-6 hidden md:block'>
            <img src="images/three-steps-bg.svg" alt=""  className='w-[1944px]'/>
        </div>
        <div className='container'>
            
            <div className='grid grid-cols-3 md:grid-flow-row gap-20'>
                <div className='col-span-3 md:col-span-1 flex flex-col justify-center items-center'> 
                    
                    <div className='relative mb-6'>
                    <div className='bg-cream h-10 w-10 p-8  rounded-full flex justify-center items-center absolute top-0 left-0 shadow-lg shadow-brown'>
                        <h1 className='text-[40px] text-[white] font-[800]'>1</h1>
                    </div>
                    <img src="images/step-1.webp" alt="" className='rounded-full h-[230px] w-[230px]' />
                    </div>
                    <div className='text-center'>
                    <h3 className='text-[24px] font-[600]'>Choose A Web Hosting Plan</h3>
                    <p>Select the right website hosting plan for your business. Need help? Get in touch with our hosting experts at +91 8276895715</p>
                    </div>
                    
                </div>
                <div className='col-span-3 md:col-span-1 flex flex-col justify-center items-center'> 
                    
                    <div className='relative mb-6'>
                    <div className='bg-cream  h-10 w-10 p-8  rounded-full flex justify-center items-center absolute top-0 left-0 shadow-lg shadow-brown'>
                        <h1 className='text-[40px] text-[white] font-[800] leading-0'>2</h1>
                    </div>
                    <img src="images/step-2.webp" alt="" className='rounded-full h-[230px] w-[230px]' />
                    </div>
                    <div className='text-center'>
                    <h3 className='text-[24px] font-[600]'>Choose A Web Hosting Plan</h3>
                    <p>Select the right website hosting plan for your business. Need help? Get in touch with our hosting experts at +91 8276895715</p>
                    </div>
                    
                </div>
                <div className='col-span-3 md:col-span-1 flex flex-col justify-center items-center'> 
                    
                    <div className='relative mb-6'>
                    <div className='bg-cream h-10 w-10 p-8 rounded-full flex justify-center items-center absolute top-0 left-0 shadow-lg shadow-brown'>
                        <h1 className='text-[40px] text-[white] font-[800]'>3</h1>
                    </div>
                    <img src="images/step-3.webp" alt="" className='rounded-full h-[230px] w-[230px]' />
                    </div>
                    <div className='text-center'>
                    <h3 className='text-[24px] font-[600]'>Choose A Web Hosting Plan</h3>
                    <p>Select the right website hosting plan for your business. Need help? Get in touch with our hosting experts at +91 8276895715</p>
                    </div>
                    
                </div>
            </div>
         
            
        </div>
    </div>
  )
}
