import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretUp } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi'
import { CgMenuLeft } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'

const menuItem = [
  {
    label: 'Hosting',
    URL: '/',
    subMenu: [
      {
        label: 'Linusx Shared Hosting',
        URL: '/linux-shared-hosting',
      },
      {
        label: 'Windows Shared Hosting',
        URL: '/windows-shared-hosting',
      },
    ],
  },
  {
    label: 'Wordpress',
    URL: '/',
  },
  {
    label: 'KVM VPS',
    URL: '/',
  },
  {
    label: 'Domain',
    URL: '/',
  },
  {
    label: 'Email',
    URL: '/',
  },
  {
    label: 'Website',
    URL: '/',
  },
  {
    label: 'Security',
    URL: '/',
    subMenu: [
      {
        label: 'SSL Certificate',
        URL: '/ssl-certificate',
      },
      {
        label: 'Site Lock',
        URL: '/site-lock',
      },
      {
        label: 'Code Guard Website Backup',
        URL: '/code-guard-backup',
      },
    ],
  },
];

export default function Header() {
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [MobileNavOpen, setMobileNavOpen] = useState(false)

  const controlDropdown = (label, isOpen) => {
    setSubMenuOpen((prevOpen) => ({
      ...prevOpen,
      [label]: isOpen,
    }));
  };

 const MobileNavControl = () =>{
    setMobileNavOpen(!MobileNavOpen)
 }

  return (
    <div className="bg-black py-3">
      <div className="container flex justify-between items-center">
        <div className='text-yellow text-[35px] block md:hidden transition-all duration-500' onClick={MobileNavControl}>
          {
            MobileNavOpen?  <CgMenuLeft/> : <MdClose/>
          }
          
        </div>
        <ul className={` ${MobileNavOpen?  'left-[-100%]' : 'left-0 duration-500' } md:flex list-none text-[white] text-[18px] space-y-6 md:space-y-0 md:space-x-12 absolute md:relative bg-black p-8 md:p-0 left-0 md:left-auto top-[139px] md:top-0 md:bg-opacity-0 z-50 w-[100%] md:w-[100%] md:border-none border-t border-t-yellow`}>
          {menuItem.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => controlDropdown(item.label, true)}
              onMouseLeave={() => controlDropdown(item.label, false)}
            >
              <div>
                <Link to={item.URL}>{item.label}</Link>
              </div>
              {item.subMenu && subMenuOpen[item.label] && (
                <ul
                  className={`md:absolute bg-yellow text-black rounded-md mt-2 p-3`}
                >
                  <div className="absolute top-[-12px] text-yellow hidden md:block">
                    <AiFillCaretUp />
                  </div>
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.URL}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div>
          <button className="client-area-btn text-[22px] bg-yellow px-2 py-2 rounded-full">
           <FiUser/>
          </button>
        </div>
      </div>
    </div>
  );
}
