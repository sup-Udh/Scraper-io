import React, { useState } from 'react';
import axios from 'axios';
import  Sidebar  from "@/components/SideBar"
import Step2Scraper from '@/components/step2Scraper';
import Image from "next/image"
const arrow = require('@/public/lol.png')

export default function newscraper(){
    const [currentDiv, setCurrentDiv] = useState(0);

    function showNextDiv() {
      setCurrentDiv(currentDiv + 1);
    }
  
    function showPrevDiv() {
      setCurrentDiv(currentDiv - 1);
    }
 

    return(
        <>
        {/* <div style={{ display: currentDiv === 0 ? 'block' : 'none' }}>This is div 1.</div>
      <div style={{ display: currentDiv === 1 ? 'block' : 'none' }}>This is div 2.</div>
      <div style={{ display: currentDiv === 2 ? 'block' : 'none' }}>This is div 3.</div>
      <div style={{ display: currentDiv === 3 ? 'block' : 'none' }}>This is div 4.</div>
      <div style={{ display: currentDiv === 4 ? 'block' : 'none' }}>This is div 5.</div>
      <button onClick={showPrevDiv} disabled={currentDiv === 0}>
        Show previous div
      </button>
      <button onClick={showNextDiv} disabled={currentDiv === 4}>
        Show next div
      </button> */}

        <div id="ParentDiv" className='pl-[5rem] ' >
            {/* Sidebar */}
            <Sidebar />


            <div className='pt-[2.25rem] ' >
            <h1 className='text-[30px] font-medium '>Setup Your Scraper</h1>
            </div>

            {/* Main Box */}
            <div className='mt-[2.25rem] bg-[#111827] w-[1281px] h-[498px] rounded-md'>

                {/* steps */}
                <div className='Main-1' style={{display: currentDiv === 0 ? 'block' : 'none'}}>
                <span className='pl-[1rem]  text-gray-200 text-[15px]  '>
                    <div className='pl-[2.25rem] font-medium text-gray-200 text-[15px]'>
                    Step 1 of 5
                    </div>
                    </span>

                    <br />
                    {/* Name */}
                    <span className='text-white text-[25px] font-semibold'>
                        <div className='pl-[2.25rem] mt-[2.25rem] '>Name</div>
                    </span>

                    <br />
                    {/* Name || input box */}
                    <div className='mt-[-2rem]'>

                    <input type='text' className=' ml-[2.25rem] w-[500px] h-[50px] rounded-md bg-[#1F2937] text-white pl-[1.25rem] text-[15px] font-medium' placeholder='coolscraper1' />

                    <p className=' ml-[2.25rem] mt-[0.25rem] font-light text-gray-400 text-[12px]  '>(Choose any name of you choice)</p>
                    </div>
                    <br />
                    {/* default URLS */}

                    <div>
                        <span className='text-white text-[25px] font-semibold'>
                        <div className='pl-[2.25rem] mt-[0.25rem] '>Default URL</div>
                        </span>

                        <input type='text' className=' ml-[2.25rem] w-[500px] h-[50px] rounded-md bg-[#1F2937] text-white pl-[1.25rem] text-[15px] font-medium' placeholder='https://redit.com' />
                        <p className=' ml-[2.25rem] mt-[0.25rem] font-light text-gray-400 text-[12px]  '>(you can edit this later on.)</p>
                    </div>
                    <br />
                    </div>
                    {/* 2nd div */}
                    <div>
                    <div className='Main-2' style={{display: currentDiv === 1 ? 'block' : 'none'}}>
                        <Step2Scraper />
                        
                    </div>
                    </div>
                    {/* 3rd div */}
                    <span className='text-white font-medium text-[18px]'>
                        <div className='pl-[2.25rem] mt-[0.25rem]'>
                        
                        <button onClick={showNextDiv} className='bg-[#7F61F4] h-[38px] w-[116px] rounded-md shadow-md hover:bg-[#7F61F4]/90'>Next</button>
                        <br />
                        <button className='mt-[2.25rem]' onClick={showPrevDiv} hidden={currentDiv === 0}>
                    <Image 
                src={arrow}
                alt="arrow"
                width={25}
                height={25}
             />
      </button>

                        </div>
                    </span>
                
            </div>


        </div>
        </>
    )

    
} 