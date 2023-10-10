import React from 'react'

export default function SearchDomain() {
  return (
    <div className='container py-6'>
        <div className='grid grid-cols-2 md:grid-flow-row'>
            <div className='flex items-center space-x-6'>
                <div className='flex items-center'>
                    <div>
                        <img src="images/header-in.svg" alt="domain" className='h-[28px]' />
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-[26px] font-[900]'>₹1260</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <img src="images/header-net.svg" alt="domain" className='h-[24px]' />
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-[26px] font-[900]'>₹1150</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <img src="images/header-org.svg" alt="domain" className='h-[26px]' />
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-[26px] font-[900]'>₹1380</h3>
                    </div>
                </div>
                

            </div>
            <div >
                    <form action="" className='flex' >
                        <input type="search" className='w-[80%] block border border-[#ddd] px-3 py-2 focus:outline-none rounded-sm'  />
                        <button className='w-[20%] bg-cream px-3 py-2 border border-cream'>Search</button>
                    </form>
            </div>
        </div>
    </div>
  )
}
