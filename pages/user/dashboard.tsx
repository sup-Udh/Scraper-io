import SideBar from "@/components/SideBar"
import run from "../../public/run.svg"
import Image from "next/image"
import Link from "next/link"
// no ssr
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const DynamicComponentWithNoSSR = dynamic(() => import('@/components/SideBar'), {
    ssr: false
})

export default function Dashboard(){
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    
    return(
        <>
        <div>
        {/* sidebar */}
        <div className="flex">
            <SideBar/>
        </div>
        {/* Page content */}

        <div className="mx-[7.5rem]">
            {/* Main Heading */}
            <h1 className="mt-[4.25rem] text-3xl font-light">Welcome udhay!</h1>

            <h2 className="mt-[3.25rem] text-2xl font-light">Active Scrapers</h2>

            {/* active scrapers (PARENT) */}
                            {/* Only display 3 scraoers max */}

            <div className="mt-[2rem] grid  lg:grid-cols-2 xl:grid-cols-3 sm:space-y-4">
                {/* number 1 */}
                <div className="border-2 border-[#111827] w-[333px] h-[123px] rounded-md shadow-lg mt-[1.15rem]">
                           {/* run icon */}
                    <div className="flex justify-end mx-5 my-4">
                    <Image
                        alt="run"
                        src={run}
                        width={25}
                        height={24}
                        />
                    </div>
                  
                    <p className="mx-5 mt-[-2.45rem] text-2xl font-bold text-gray-200">myscraper1</p>
             

                    {/* last run */}
                    <p className="mx-5 text-sm text-gray-400 font-light">last run: august 10th,10:58pm</p>

                </div>

                {/* number2 */}

                <div className="border-2 border-[#111827] w-[333px] h-[123px] rounded-md shadow-lg">
                           {/* run icon */}
                    <div className="flex justify-end mx-5 my-4">
                    <Image
                        alt="run"
                        src={run}
                        width={25}
                        height={24}
                        />
                    </div>
                  
                    <p className="mx-5 mt-[-2.45rem] text-2xl font-bold text-gray-200">myscraper1</p>
             

                    {/* last run */}
                    <p className="mx-5 text-sm text-gray-400 font-light">last run: august 10th,10:58pm</p>

                </div>


                {/* NUMBER 3 */}


                <div className="border-2 border-[#111827] w-[333px] h-[123px] rounded-md shadow-lg">
                           {/* run icon */}
                    <div className="flex justify-end mx-5 my-4">
                    <Image
                        alt="run"
                        src={run}
                        width={25}
                        height={24}
                        />
                    </div>
                  
                    <p className="mx-5 mt-[-2.45rem] text-2xl font-bold text-gray-200">myscraper1</p>
             

                    {/* last run */}
                    <p className="mx-5 text-sm text-gray-400 font-light">last run: august 10th,10:58pm</p>

                </div>



            </div>


            {/* Usage */}

            <div className="">
                <h2 className="mt-[3.25rem] text-2xl font-light">Overall Usage</h2>
                {/* Usage block parents */}

                <div className="mt-[2rem] grid  lg:grid-cols-2 xl:grid-cols-3 sm:space-y-4">

                    {/* 1 */}
                <div className="bg-[#7F61F4]/50 w-[261px] h-[120px] rounded-md shadow-lg mt-[1.15rem]">
                    <p className="mx-5 my-5 font-medium text-gray-200">Active scrapers</p>

                    <br />
                    <p className="mx-5 mt-[-2.25rem] my-5 text-2xl font-medium">0</p>
                 
                  
                </div>


                {/* 2 */}

                <div className="bg-[#7F61F4]/50 w-[261px] h-[120px] rounded-md shadow-lg">
                    <p className="mx-5 my-5 font-medium text-gray-200">Token usage</p>

                    <br />
                    <p className="mx-5 mt-[-2.25rem] my-5 text-2xl font-medium">0</p>
                 
                  
                </div>

                   {/* 3 */}

                   <div className="bg-[#7F61F4]/50 w-[261px] h-[120px] rounded-md shadow-lg">
                    <p className="mx-5 my-5 font-medium text-gray-200">API Calls</p>

                    <br />
                    <p className="mx-5 mt-[-2.25rem] my-5 text-2xl font-medium">0</p>
                 
                  
                </div>

                  
                   

                </div>


            </div>
           

        </div>
        </div>


        

        </>
    )
}

