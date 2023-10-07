import axios from "axios"
import { useState } from "react"

export default function login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const sub = async (e: any) => {
        e.preventDefault()
        const res = await axios.post("/api/login", {
            email: email,
            password : password
        })
        console.log(res.data)
        if(res.data.message === "User not found" ){
            alert("nothing foind")
        }if(res.data.message === "Password is incorrect"){
            alert("incorrect password")
        }if (res.data.message === "Login successful"){
            alert("login successful")
        }

    }

    return(
        <>
        <div className="flex justify-center mt-[10rem] font-[Poppins]">


        <div className="mr-[17.50rem] ">
        <h1 className="text-xl font-bold">Log in</h1>
        </div>



        </div>

        <div className="mt-[2.25rem] flex justify-center mr-[2rem] font-[Poppins]">
            <form>
                <p className="font-light text-[16px]">Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-[0.25rem] border-2 border-[#3C3E43] placeholder-gray-500 placeholder:pl-[0.25rem] text-normal font-[Poppins] rounded-md w-[300px] h-[36px] mt-[0.35rem] bg-black" placeholder="naruto1@gmail.com" />


                <p className="font-light text-[16px] mt-[0.25rem]">Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="mt-[0.25rem] bg-black border-2 border-[#3C3E43] placeholder-gray-500 placeholder:pl-[0.25rem] text-normal rounded-md w-[300px] h-[36px]" placeholder="****" />
                <hr  className="mt-[2.25rem] bg-[#3C3E43]"/>
                <br />
                <a>
                    <div className=" w-[300px] h-[38px] flex justify-center bg-[#7F61F4] rounded-lg">
                                    <button onClick={sub} className="text-white font-normal text-base ">Log in</button>

                </div>

                </a>

</form>

</div>
        </>
    )
}