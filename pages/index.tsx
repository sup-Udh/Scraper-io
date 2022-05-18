import Image from "next/image"
import thumbnail from "../public/thubnail.png"
export default function Home() {
  return (
    <body className="bg-[#141623]">


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

  )
}
