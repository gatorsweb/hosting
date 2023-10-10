import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretUp } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi'

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

  const controlDropdown = (label, isOpen) => {
    setSubMenuOpen((prevOpen) => ({
      ...prevOpen,
      [label]: isOpen,
    }));
  };

  return (
    <div className="bg-black py-3">
      <div className="container flex justify-between items-center">
        <ul className="flex list-none text-[white] text-[18px] space-x-12">
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
                  className={`absolute bg-yellow text-black rounded-md mt-2 p-3`}
                >
                  <div className="absolute top-[-12px] text-yellow">
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
