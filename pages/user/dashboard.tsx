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


        

        {/* Add your dashboard content here */}
      </div>
    </div>
       
        </>
    )
}