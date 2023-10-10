import React from 'react'
import { IoIosCart } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'

export default function HeaderTop() {
  return (
    <div>
        <div className="container flex justify-between items-center py-4">
            <div className='w-[180px]'>
                <img src="images/BeeHost.svg" alt="" />
            </div>
            <div className='flex space-x-5'>
                <div>
                    <form action="" className='flex items-center'>
                    <input type="serch" className='bg-[#ededed] py-2 px-4 rounded-l-md border-none  focus:outline-none' placeholder='Knowledgebase...' />
                    <button className='bg-black text-[white] py-3 px-4 rounded-r-md'> <FaSearch/> </button>
                    </form>
                    
                </div>
                <div className=''>
                    <button className='flex justify-center bg-[#ededed] py-2 px-4 rounded-sm text-brown'> <IoIosCart className='text-[24px] '/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
