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

      <div className="flex justify-end pr-[10rem]">
        <img src={require('../public/thubnail.png')} alt="scraper" />
        <h1 className="mt-[-20rem] ">lol</h1>
      </div>
    </body>
 
  )
}
