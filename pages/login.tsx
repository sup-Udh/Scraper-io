import axios from "axios"
import { useState } from "react"

export default function login(){
    return(
        <>
        <div className="flex justify-center mt-[10rem] font-[Poppins]">


        <div className="mr-[17.50rem] ">
        <h1 className="text-xl font-bold">Log in</h1>
        </div>



        </div>

        <div className="mt-[2.25rem] flex justify-center mr-[2rem] font-[Poppins]">
            <form>
                <p className="font-light text-[16px]">Name</p>
                <input className="mt-[0.25rem] border-2 border-[#3C3E43] placeholder-gray-500 placeholder:pl-[0.25rem] text-normal font-[Poppins] rounded-md w-[300px] h-[36px] mt-[0.35rem] bg-black" placeholder="naruto" />


                <p className="font-light text-[16px] mt-[0.25rem]">Email</p>
                <input className="mt-[0.25rem] bg-black border-2 border-[#3C3E43] placeholder-gray-500 placeholder:pl-[0.25rem] text-normal rounded-md w-[300px] h-[36px]" placeholder="naruto@gmail.com" />
                <hr  className="mt-[2.25rem] bg-[#3C3E43]"/>
                <br />
                <a>
                    <div className=" w-[300px] h-[38px] flex justify-center bg-[#7F61F4] rounded-lg">
                                    <button className="text-white font-normal text-base ">Log in</button>

                </div>

                </a>

</form>

</div>
        </>
    )
}