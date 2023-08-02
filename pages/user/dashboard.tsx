import { Chart } from "chart.js"
import Navbar from "@/components/navbar"
export default function dashboard(){





    return(
        <>
         <div className="flex">
      {/* Navbar */}
      <div className="w-1/6 h-screen  ">
      <Navbar/>

        {/* Add your navbar content here */}
      </div>

      {/* Dashboard */}
      <div className="w-5/6 h-screen bg-gray-900">

        {/* User welcome  */}
        <div className="bg-gray-700 bg-opacity-80 p-4 w-[25.5rem] h-[5rem] ml-[2.5rem] mt-[2.5rem] rounded-md">
        <h1 className="ml-[2.5rem]  text-2xl font-semibold">Welcome, <span className="underline underline-offset-2">Udhay</span></h1>
        </div>

        {/* Scrapers */}
        <div className="bg-gray-700 bg-opacity-80 p-4 w-[40.5rem] h-[15rem] ml-[2.5rem] mt-[2.5rem] rounded-md">
          <h2 className="text-2xl font-semibold ml-[2.5rem]">Your Scrapers</h2>
          {/* parent scraper */}
          <div className="flex">
            <div className="w-1/2 bg-blue-300 p-4 mr-[4rem]">Scraper -1</div>
            <div className="w-1/2 bg-green-300 p-4">Scraper -2</div>
            <div className="w-1/2 bg-yellow-500">scraper - 3</div>

          </div>

        


        </div>
                

        

        {/* Add your dashboard content here */}
      </div>
    </div>
       
        </>
    )
}