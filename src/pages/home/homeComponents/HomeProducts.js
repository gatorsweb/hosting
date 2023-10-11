import React from 'react'

export default function HomeProducts() {
  return (
    <div className='container my-[125px]'>
        <div className='text-center mb-6'>
            <h1 className='text-[45px] font-[800]'>Browse Our Products / Services</h1>
        </div>
        <div className='grid grid-cols-3 md:grid-flow-row gap-6'>
            <div className='col-span-3 md:col-span-1'>
                <div className='home-product-box text-center border border-[#ddd] rounded-md p-6  hover:bg-cream hover:text-[white] transition duration-500'>
                    <h3 className='text-[35px] font-[700]'>Website Hosting</h3>
                    <p className='text-[22px]'>Secure your domain name by registering it today</p>
                    <button className='bg-cream px-6 py-2  text-[white] text-[18px] rounded-md mt-6'>Order Now</button>
                </div>
            </div>
            <div className='col-span-3 md:col-span-1'>
                <div className='home-product-box text-center border border-[#ddd] rounded-md p-6  hover:bg-cream hover:text-[white] transition duration-500'>
                    <h3 className='text-[35px] font-[700]'>Website Hosting</h3>
                    <p className='text-[22px]'>Secure your domain name by registering it today</p>
                    <button className='bg-cream px-6 py-2  text-[white] text-[18px] rounded-md mt-6'>Order Now</button>
                </div>
            </div>
            <div className='col-span-3 md:col-span-1'>
                <div className='home-product-box text-center border border-[#ddd] rounded-md p-6  hover:bg-cream hover:text-[white] transition duration-500'>
                    <h3 className='text-[35px] font-[700]'>Website Hosting</h3>
                    <p className='text-[22px]'>Secure your domain name by registering it today</p>
                    <button className='bg-cream px-6 py-2  text-[white] text-[18px] rounded-md mt-6'>Order Now</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}
