import Image from "next/image"
import thumbnail from "../public/thubnail.png"
import Head from "next/head"
import { Meta } from "../components/partials/Meta"
export default function Home() {
  return (
    <>
    <Meta
        title="Enviroso ━ A Social Platform for Environmental Activists"
        description="Meet Enviroso, A platform built for environmental activists to network and organize cleanup missions."
        keywords="enviornment, activist, network, pollution, cleanup, mission, organization, platform"
        image="https://avatars.githubusercontent.com/u/95420495?s=200&v=4"
        url="https://enviroso.netlify.app"
      />
    
    <body className="bg-[#141623]">

      {/* create a meta tag for the url */}
      <Head>
        {/* meta og:url */}
        <meta property="og:title" content="rando" />
<meta property="og:site_name" content="udhay's scraper" />
<meta property="og:description" content="scraps potatos" />
<meta property="og:image" content="/url" />
<meta name="theme-color" content="#55bbee" />
      </Head>

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
