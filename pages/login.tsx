export default function login(){
    return(
        <>
        <div className="flex justify-center mt-[18rem]">
            <div>
                <input className="border border-[#818181] w-[25rem] h-[2.5rem] pl-4 rounded-md"type="text" placeholder="Email Address" />
            </div>
            <br />
           
        </div>
        <div className="flex justify-center mt-[1.25rem]">
                <input className="border border-[#818181] w-[25rem] h-[2.5rem] pl-4 rounded-md"type="text" placeholder="Your Password" />
            </div>

            <div className="flex justify-center mt-[1.25rem]">
                <button className="bg-[#4F75FF] w-[25rem] rounded-md  h-[2.3rem]">Login</button>
            </div>

            <div className="flex justify-center">
                <h3 className="underline text-gray-400 mt-[0.25rem] " >Forgot your password?</h3>
            </div>
            <div className="flex justify-center">
                <h3 className="underline text-gray-400 mt-[0.25rem]">Don&apos;t have an account? Sign up</h3>

            </div>
        </>
    )
}