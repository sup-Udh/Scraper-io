import Image from 'next/image'
import arrow from '../public/arrow.png'
import { useState } from 'react'
import axios from 'axios'
import github from '../public/git.png'
import Link from 'next/link'
import { Meta } from '../components/partials/Meta'
export default function Home() {
  const [email , setEmail] = useState('')
  const [hiddensucess , setHiddensucess] = useState(true)

  const [hiddenfail , setHiddenfail] = useState(true)

  const sub = async (e:any) => {
    e.preventDefault();
    try{
      const response = await axios.post("/api/waitlist", {
        email
      })
      if(response.data.message === "User added"){
        // show the alert box for 2 seconds then hide it
        setHiddensucess(false)
        setTimeout(() => {
          setHiddensucess(true)
        }, 2000);


      }else{
        setHiddenfail(false)
        setTimeout(() => {
          setHiddenfail(true)
        }, 2000);
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }



  return(
    <>
    <Meta title="cralwy || home" description="cralwy is a web scraping tool that helps you scrape data from any website." author="Udhay" />
    
    <div className='master#0'>

      



      <title>cralwy || home</title>

      {/* navbar code. */}
        {/* Danger did not workout! */}
        <div id="container" className={hiddenfail ? 'hidden': ".hideMe p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"} role="alert">
  <span className="font-medium">You&apos;ve already been added</span> Change a few things up and try submitting again.
</div>
      {/* alert box || sucess */}
     <div id="container" className={hiddensucess ? 'hidden' : ".hideMe p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"} role="alert">
  <span className="font-medium">Awesome your added!!</span> We&apos;ll Soon let you know once we&apos;re done  Cooking!! 🎉🎉
</div>


{/* navabr */}
<div>
  <nav className="flex items-center justify-between flex-wrap  p-6">
    <div className="flex items-center flex-shrink-0 text-[#4F75FF] mr-6">
      <span className="font-semibold text-xl tracking-tight">crawly</span>
      </div>
      {/* create div on the most left corner  */}
      <div className='flex item-left'>
      <Link href='https://github.com/sup-Udh/Scraper-io'>
        <Image src={github} alt="github" width={30} height={30} />
        </Link>
      </div>
    
        </nav>
</div>




    {/* title heading */}
    <div className="flex justify-center text-4xl font-bold mt-[10rem] text-animation">
        <h1 className=''>
        <span className='ml-[0.60rem]'>A visual and terminal based </span> <br />
        <span className='text-[#3562FF]'>scraper</span> to extract data easily
        </h1>
    </div>

    {/* center down content */}
    <div className='flex justify-center mt-[1.25rem] text-gray-400 text-animation'>
    <p>
        Start scraping your sites with ease no more code required<br />
         <span className='ml-[1.25rem]'>also includes data parsing,api,automation and more!</span>

        </p>
    </div>
    

  
 




    <div id="waitlist">

      <div className='flex justify-center mt-[1.25rem]'>

      <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
     className='sm:  absolute h-[55px] w-[527px] border border-[#818181] rounded-3xl pl-4 ' />
     <div className='absolute ml-[20rem] mt-[0.3rem] font-bold'>
     <button onClick={sub}className='  h-[45px] w-[198px] bg-[#4F75FF] rounded-3xl text-black font-bold'>Join the wailist</button>

     </div>


      </div>
 
    



  
    </div>


 



    {/* master class div ending */}
    </div>
    </>

  )

}
