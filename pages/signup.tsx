export default function singup(){

    return(
        <>
        <div className="flex justify-center mt-[10rem] font-[Poppins]">
        <div className="mr-[16.25rem] ">
        <h1 className="text-xl font-bold">Sign Up</h1>
        </div>
        <br />
        {/* form */}
        


        </div>

        <div className="mt-[2.25rem] flex justify-center mr-[2rem] font-[Poppins]">
            <form>
                <p className="font-light text-[16px]">Name</p>
                <input className="mt-[0.25rem] border-2 border-[#3C3E43] placeholder-gray-500 placeholder:pl-[0.25rem] text-normal font-[Poppins] rounded-md w-[300px] h-[36px] mt-[0.35rem] bg-black" placeholder="naruto" />


                <p className="font-light text-[16px] mt-[0.25rem]">Email</p>
                <input className="mt-[0.25rem] bg-black border-2 border-[#3C3E43] placeholder-gray-500 placeholder:pl-[0.25rem] text-normal rounded-md w-[300px] h-[36px] mt-[0.35rem]" placeholder="naruto@gmail.com" />

                <p className="font-light text-[16px] mt-[0.25rem]">Password</p>
                <input className="mt-[0.25rem] border-2 border-[#3C3E43] placeholder-gray-200 placeholder:pl-[0.25rem] bg-black text-normal rounded-md w-[300px] h-[36px] mt-[0.35rem]" placeholder="******" />


                <p className="font-light text-[16px] mt-[0.25rem]">Confirm Password</p>
                <input type="password" className="mt-[0.25rem] border-2 border-[#3C3E43] placeholder-gray-200 placeholder:pl-[0.25rem] text-normal bg-black rounded-md w-[300px] h-[36px] mt-[0.35rem]" placeholder="******" />

                <br />
                <a>
                    <div className="mt-[2.35rem] w-[300px] h-[38px] flex justify-center bg-[#7F61F4] rounded-lg">
                                    <button className="text-white font-normal text-base ">Singup</button>

                </div>

                </a>
                
            </form>
        </div>
        </>

    )
}