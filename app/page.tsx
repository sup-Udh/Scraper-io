import Image from 'next/image'
import arrow from '../public/arrow.png'

export default function Home() {
  return(
    <div className='master#0'>

      {/* navbar code. */}
    <div className=''>
      <div className=''>

      </div>


    </div>

    {/* title heading */}
    <div className="flex justify-center text-4xl font-bold mt-[10rem]">
        <h1 className=''>
        <span className='ml-[0.60rem]'>A visual and terminal based </span> <br />
        <span className='text-[#06B6D4]'>scraper</span> to extract data easily
        </h1>
    </div>

    {/* center down content */}
    <div className='flex justify-center mt-[1.25rem] text-gray-400'>
    <p>
        Start scraping your sites with ease no more code required<br />
         <span className='ml-[1.25rem]'>also includes data parsing,api,automation and more!</span>

        </p>
    </div>

    {/* Buttons content */}

    <div className='flex justify-center mt-[4.25rem]'>
      <button className='border-[2px] border-[#fff] h-[36px] w-[239px] rounded-md font-light'>
        <a href="#waitlist">Sign Up</a>
        </button>
      <button className='border-1 bg-[#3C3E43] h-[36px] w-[239px] rounded-md font-thin ml-[1.25rem]'>Learn More</button>
    </div>


{/* animation buttons */}
    <div className='flex justify-center mt-[3.25rem] animate-bounce'>
     
      <button>
        <a href="#waitlist">
    <Image 
    src={arrow}
    height={30}
    alt='arrow'
    className='mt-[4.25rem]'
    />
    </a>
    </button>


    </div>

    <div id="waitlist">
    {/* div for the waitlist */}
     <div className=" rounded-lg mt-[400px] w-full h-[25rem] bg-gradient-to-b from-purple-500 to-blue-500">
      
      {/* title  */}
      
      <div className='flex justify-center underline underline-offset-4 decoration-3'>
      <p className='mt-[2.5rem] font-bold text-[30px]'>
        Join the <span className=''>beta</span>
      </p>

      </div>


      
{/* mini content div */}
      <div className='flex justify-center mt-[0.25rem]'>
      <p>
      The beta version of crawly will soon be out for users. Drop your <br />
      <span className='ml-[5.25rem]'>Email below we’ll notify you once it’s ready!</span>
      </p>
      </div>
     

        {/* input box */}
    <div className='flex justify-center '>
      <input placeholder='email' type='email' required className='text-left px-2 h-[40px] w-[243px] mt-[2.5rem] border-2 bg-[#fff] rounded-md  focus:border-sky-500 focus:ring-sky-500   text-black '/>
      {/* add a button parallel to the input area  */}
      <button className='mt-[2.5rem] ml-[1.25rem] bg-sky-500 rounded-md h-[4opx] w-[100px] text-sm font-medium'>Join Waitlist</button>
    </div>

    </div>


    </div>


 



    {/* master class div ending */}
    </div>

  )

}
