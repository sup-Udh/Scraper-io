// keep this element hidden until the user clicks the button to scrape the data

export default function Step2Scraper(){
    return(
        <div id="Mainbody" className="pl-[2.5rem]">
            <span>
          
              
            </span>

            <div className='pt-[2.25rem]  ' >
            <h1 className='text-[25px] font-semibold'>
          
                Elements
                </h1>
            </div>
            <br />
            {/* Input for elements */}
            <div className='mt-[-1rem]'>

                    <input type='text' className=' w-[529px] h-[117px] rounded-md bg-[#1F2937] text-white'  />

                    <p className='  mt-[0.25rem] font-light text-gray-400 text-[12px]  '>(Enter all the elements that needs to be scraped)</p>
            </div>

            <br />

            {/* type */}
            <div className='mt-[0.25rem]'>
            <h1 className='text-[25px] font-semibold'>Type</h1>
            </div>
            < br />
            {/* crete a drop down with 1 options which says "normal "" */}
            <div className='mt-[-1rem] mb-[2.25rem]'>
            <div className="relative inline-block w-529">
  <select className="block appearance-none w-full bg-[#111827] border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Standard</option>
    <option>Advanced(Still under development)</option>
    <option>Expert (still under development)</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95a1 1 0 0 0-1.41 0L10 11.59l-3.54-3.54a1 1 0 1 0-1.41 1.41l4.24 4.24a1 1 0 0 0 1.41 0l4.24-4.24a1 1 0 0 0 0-1.41z"/></svg>
  </div>
</div>


            </div>
        </div>
    )
}