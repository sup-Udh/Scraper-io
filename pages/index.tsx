import Image from "next/image"
import thumbnail from "../public/thubnail.png"
import Head from "next/head"
import logo from "../public/logo.png"
import { Meta } from "../components/partials/Meta"
export default function Home() {
  return (
    <>
    <Meta
        title="ScrapeCode ━  AI powered web scraper for all your needs"
        description="Meet ScrapeCode ━  works great for general web scraping and More!"
        keywords="Web Scraping, Coding, AI powered web scraper, ScrapeCode"
        image={logo}
        url="https://scrape-code.vercel.app"
      />
    
    <body className="bg-[#141623]">

      {/* create a meta tag for the url */}


      <div className="pl-10 pt-[15rem]">
        
        <h1 className="text-[5rem] text-white font-inter font-bold">
          Web Scraping <br />
          simplified.
        </h1>
        <p className="text-[20px] text-[#A9A5A6] font-inter font-normal mt-[2rem]">
          Focus on extracting the data you need,<br />
          and not dealing with concurrent headless <br />
          browsers that will eat up all your RAM and CPU.
        </p>

      </div>

      <div className="flex justify-end pr-[5rem] lg:mt-[-28rem] md: mt-[5rem] ">
        <Image
        className="md: mt"
          src={thumbnail}
          height={500}
          width={600}
        />


      </div>
    </body>
    </>

  )
}
