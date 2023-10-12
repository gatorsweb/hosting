import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'Why buy a domain name from GatorsWeb?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How do I install React?',
    answer: 'You can install React using npm or yarn. Run: npm install react',
  },
  {
    question: 'What are components in React?',
    answer: 'Components are the building blocks of a React application. They are reusable, self-contained units of code that define how a part of the user interface should appear and function.',
  },
  {
    question: 'What is state in React?',
    answer: 'State is a built-in object in React that holds data which can be used to control how components behave and render.',
  },
];

export default function Help() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container py-[125px]">
        <div className='text-center mb-4'>
          <h1 className='text-[45px] font-[700]'>Frequently asked questions</h1>
        </div>
      <div className='md:max-w-[70%] m-auto'>
      {faqData.map((faq, index) => (
        <div key={index} className=''>
          <div onClick={() => toggleAccordion(index)} className='bg-yellow px-4 py-2 my-1 flex justify-between items-center'>
            <h1 className='text-[22px]'>{faq.question}</h1> {index === activeIndex ? <FaMinus /> : <FaPlus />}
          </div>
          {index === activeIndex && (
            <div className='p-3'>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      </div>
      

      
    </div>
  );
}
