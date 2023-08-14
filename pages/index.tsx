import Image from 'next/image'
import arrow from '../public/arrow.png'
import { useState } from 'react'
import axios from 'axios'
import github from '../public/git.png'
import Link from 'next/link'
import { Meta } from '../components/partials/Meta'
import vector from "../public/vector.png"
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
        }, 5000);


      }else{
        setHiddenfail(false)
        setTimeout(() => {
          setHiddenfail(true)
        }, 5000);
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }



  return(
    <>
    <Meta title="cralwy || home" description="cralwy is a web scraping tool that helps you scrape data from any website." author="Udhay" />
    <div className='master#0 '>
      <title>cralwy || home</title>

      <h1 className='m-[5rem]  pt-[2.25rem] pl-[6.25rem] font-["__switzer_93f603,__switzer_Fallback_93f603"] text-2xl  '>Simplifying Data Extractions</h1>
      <br />
      <div className='mt-[-5.25rem] ml-[11.25rem] space-y-6 '>
      <span className='text-gray-300 font-normal text-gray/50'>
      Discover a game-changing solution that redefines data extraction. Our innovative platform empowers<br />
       users with a no-code approach, simplifying the process and making it accessible to all. With an intuitive <br />
        visual interface, you can effortlessly create customized workflows <br />
      </span>
      <div className='mt-[1.25rem]'>
      <span className='text-gray-300 font-normal text-gray/50'>
      effortlessly gather, analyze, and utilize data insights. Stay tuned for the launch and be among, crawly <br />
      is rethinking the way data scraping is done. We want everyone to enjoy a powerful no-code based scraper <br />
      that is easy to use and accessible to all.
      </span>
      </div>


      <div className='mt-[1.25rem]'>
      <span className='text-gray-300 font-normal text-gray/50'>
        We'll Soon be launching our beta version of crawly for all the users keep in mind that the beta version <br />
        will be free for all the users hence not all the features will be available in the beta version. but we <br />
        we'd love for you to join us on our journey to make web scraping easy for everyone.
      </span>
      </div>

      <div className='mt-[1.25rem] '>
        <button className='border border-white rounded-md w-[10rem] h-[2rem] '>join community</button>

      </div>
      </div>
 
      </div>
    </>

  )

}
