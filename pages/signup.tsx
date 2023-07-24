import InputButton from "@/components/InputButton"
export default function signup(){
    return(
        <>
        <div className="flex justify-center mt-[18rem]">
            <div>
                <input className="border border-[#818181] w-[25rem] h-[2.5rem] pl-4 rounded-md"type="text" placeholder="Email Address" />
            </div>
            <br />
           
        </div>
        <InputButton />
            <div className="flex justify-center">
                <h3 className="underline text-gray-400 mt-[0.25rem]">Already have an account? Log in</h3>

            </div>
        </>
    )
}