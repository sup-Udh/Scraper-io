import Navbar from "@/components/navbar"
import Chart from "./../../components/chart"
export default function dashboard(){





    return(
        
        <>
         <div className="flex bg-gray-950">
      {/* Navbar */}
      <div className="w-1/6 h-screen  ">
      <Navbar/>

      </div>

           {/* Main */}    
           <div className="main">

            <div className="mt-[2.25rem] bg-[#40414F] bg-opacity-50 w-[30rem] h-16 rounded-lg ">
                <span className="grid justify-items-start"><div className="mt-[.60rem] mx-4 font-medium text-xl">Welcome udhay!</div></span>

            </div>

            {/* parent flex */}
            <div className="flex">


            <div className="mt-[3.25rem] bg-[#40414F] bg-opacity-50 w-[20rem] h-32 rounded-lg flex-shrink-0 ">
                <span className="grid justify-items-start"><div className="mt-[1.40rem] mx-4 font-semibold text-sm text-gray-200 font-sans underline underline-offset-1">Active Scrapers</div></span>
                <br />
                <span className="grid justify-items-start"><div className="mt-[0.25rem] mx-4 text-2xl">
                     0</div></span>
            </div>


{/* 2nd div */}
<div className="mt-[3.25rem] bg-[#40414F] bg-opacity-50 w-[20rem] h-32 rounded-lg flex-shrink-0 mx-5">
                <span className="grid justify-items-start"><div className="mt-[1.40rem] mx-4 font-semibold text-sm text-gray-200 font-sans underline underline-offset-1">Token Usage</div></span>
                <br />
                <span className="grid justify-items-start"><div className="mt-[0.25rem] mx-4 text-2xl">
                     0</div></span>
            </div>                

                {/* end parent div */}
            </div>

            {/* usage statics */}
            <div className="mt-[2.25rem] bg-[#40414F]  bg-opacity-50 rounded-lg">

                <h1 className="font-medium text-xl mx-4">Usage</h1>

                <div>
                    {/* chart */}
                    <Chart />
                </div>
            </div>
    


            </div>
         
           
      
    </div>

    
   


       
        </>
    )
}