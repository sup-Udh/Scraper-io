import Navbar from "@/components/navbar"
import { BiCalendar } from "react-icons/bi"
import { BiSolidBolt } from "react-icons/bi"
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
        <div className="bg-[#40414F] bg-opacity-50  w-[1129px] h-[651px] mx-[10rem] md:w-[564px] lg:w-[1129px] sm:w-[282px] rounded-md">
            {/* mini navabar for the div */}

            <div>
                <nav className=" h-[3.60rem]  border-b-2 border-gray-500 rounded-md shadow-lg">
                    <div className="grid grid-cols-4 lg:gird-cols-8 md:gird-cols-2 sm:gird-cols-4">
                        <span className="m-1 ml-[0.25rem] font-semibold font-['Inter']  hover:bg-gray-700 h-[50px] w-[70px] rounded-md ">
                            <p className="flex justify-center mt-[0.90rem] text-white ">
                                <div>
                                    <BiSolidBolt size="21" />
                                </div>
                                Scraper
                                </p>
                        </span>

                        <span className="m-1 font-semibold font-['Inter']  hover:bg-gray-700 h-[50px] w-[70px] rounded-md ">
                            <p className="flex justify-center mt-[0.90rem] text-white">
                                <div>
                                    <BiCalendar size="21" />
                                </div>
                                Schedule
                                </p>

                        </span>


                    </div>
                </nav>
            </div>
        </div>

        {/* end parent div */}
        </div>


        </>
    )
}