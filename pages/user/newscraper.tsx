import { useState } from 'react'
import axios from 'axios';
import  Sidebar  from "@/components/SideBar"
import step2Scraper from '@/components/step2Scraper';

export default function newscraper(){
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
 

    return(
        <>

        <div id="ParentDiv" className='pl-[5rem] ' >
            {/* Sidebar */}
            <Sidebar />


            <div className='pt-[2.25rem] ' style= {{display: showMe?"block":"none"}}>
            <h1 className='text-[30px] font-medium '>Setup Your Scraper</h1>
            </div>

            {/* Main Box */}
            <div className='mt-[2.25rem] bg-[#111827] w-[1281px] h-[498px] rounded-md'>

                {/* steps */}
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
                    <span className='text-white font-medium text-[18px]'>
                        <div className='pl-[2.25rem] mt-[0.25rem]'>
                        <button onClick={toggle} className='bg-[#7F61F4] h-[38px] w-[116px] rounded-md shadow-md hover:bg-[#7F61F4]/90'>Next</button>

                        </div>
                    </span>
                
            </div>


        </div>
        </>
    )

    
} 