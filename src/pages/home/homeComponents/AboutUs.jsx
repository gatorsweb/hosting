import React from 'react'

export default function AboutUs() {
  return (
    <div className='container my-[125px]'>
        <div className='grid grid-cols-2 md:grid-flow-row gap-8'>
            <div className='col-span-2 md:col-span-1'>
                <img src="images/summary.webp" alt="summery" />
            </div>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
                <h4 className='text-[22px]'>About Our Company</h4>
                <h3 className='text-[30px] font-[600] mb-2'>A Brief Summary of GatorsWeb</h3>
                <p>We take Web Hosting to the next level and bring a whole new perspective when it comes to affordability in the web hosting space. Not only do we bundle our hosting plans with over $200+ worth of free software, we do that at no-renewal hikes either, a strict pricing model we have been practicing for almost a decade.</p>
                <h3 className='text-[30px] font-[600] mb-2 mt-8'>Why We Are The Best?</h3>
                <p>Our unique approach to affordability while offering premium products and services has helped us garner the trust of thousands of Business Owners, Freelancers, Smaller Web Hosts, Communities and Bloggers who manage and host their Websites under our hosting brand.</p>
            </div>
        </div>
    </div>
  )
}
