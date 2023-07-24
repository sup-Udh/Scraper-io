import { useState } from 'react';

const InputButton = () => {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e : any) => {
    setInputValue(e.target.value);
  };
    return (
      <>

     

      <div className='flex justify-center mt-[1.25rem]'>
        <input 
        placeholder='Your Password'
        type = "password"
        required
        className="border border-[#818181] w-[25rem] h-[2.5rem] pl-4 rounded-md"
        value={inputValue}
        onChange={handleInputChange}
        />
      </div>

      <div className='flex justify-center mt-[1.25rem]'>
        {/* <button className={`bg-[#4F75FF] w-[25rem] rounded-md  h-[2.3rem]  `}>Sign up</button> */}
        <button
        className={`bg-[#4F75FF] w-[25rem] h-[2.5rem] rounded-md ${
          inputValue ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
        }`}
        disabled={!inputValue}
      >
        Signup
      </button>
      </div>
    {/* <div className="flex justify-center">
      <div >

      <input
      placeholder='Email Address'
        type="email"
        required
        className="border border-[#818181] w-[25rem] h-[2.5rem] pl-4 rounded-md"
        value={inputValue}
        onChange={handleInputChange}
      />
      </div>
     
      <br />

    

      
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          inputValue ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
        }`}
        disabled={!inputValue}
      >
        Submit
      </button>
    </div> */}
    </>
  );
};
export default InputButton;