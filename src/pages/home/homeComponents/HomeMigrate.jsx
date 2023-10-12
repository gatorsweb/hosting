import React from 'react'

export default function HomeMigrate() {
  return (
    <div className='bg-brown py-16'>
        <div className='container'>
            <div className='grid grid-cols-2 md:grid-flow-row gap-4'>
                <div className='text-[white] col-span-2 md:col-span-1 flex flex-col justify-center'>
                    <h2 className='text-[35px] font-[700]'>Hosting Migration to BeBeeHost</h2>
                    <h3 className='text-[30px] font-[200] text-yellow'>We'll manage your migration in 24 hours or your first year is free!</h3>
                    <p className='my-2'>We use only the latest and fastest web servers available from Dell and Supermicro. Every one of our servers has at least 16 highly performing Intel Xeon CPU cores, 64GB of RAM, and fast and reliable SSD drives protected with RAID. We place a lighter load on our machines than our competitors do, so your site has breathing room during busy periods and you can run more complex scripts.</p>
                    <button className='py-3 px-8 bg-yellow text-brown text-[18px] font-[600] rounded-md mt-6 w-fit'>Rise a ticke now</button>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <img src="images/migrate.svg" alt="migrate" />
                </div>
            </div>
        </div>
    </div>
  )
}
