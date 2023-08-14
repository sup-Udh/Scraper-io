import Navbar from "@/components/navbar"
import { BiCalendar } from "react-icons/bi"
import { BiSolidBolt } from "react-icons/bi"
import { BiNetworkChart } from "react-icons/bi"
export default function NewScraper(){
    return(
        <>
        <Navbar />
        <div className="parent  h-screen bg-gray-950">

        <div className="flex  mx-[10rem] my-[2.25rem] ">
            <h1 className="font-semibold text-[25px] font-['Inter']">Setup Your scraper</h1>
        </div>

        <br />
        {/* scraper div */}
        <div className="bg-[#40414F] bg-opacity-50  w-[1129px] h-[651px] mx-[10rem] md:w-[564px] lg:w-[1129px]  rounded-md">
            {/* mini navabar for the div */}

            <div>
            <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="#" className="flex items-center text-white font-semibold text-lg">
           <BiSolidBolt className="h-6 w-6 mr-[0.25rem]" />
            Home
          </a>
          <a href="#" className="flex items-center text-white font-semibold text-lg">
            <BiCalendar className="h-6 w-6 mr-[0.25rem]" />
            Schedule
          </a>
          <a href="#" className="flex items-center text-white font-semibold text-lg">
            <BiNetworkChart className="h-6 w-6 mr-[0.25rem]" />
            Proxy
          </a>
          <a href="#" className="flex items-center text-white font-semibold text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Contact
          </a>
        </div>
       
      </div>
    </nav>
            </div>
        </div>

        {/* end parent div */}
        </div>


        </>
    )
}