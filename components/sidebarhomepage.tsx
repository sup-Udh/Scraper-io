import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
export default function Sidebarhome(){
    const SideBarIcon = ({ icon } : {icon: any}) => (
        <div className="sidebar-icon group">
          {icon}

         

        </div>
    ) 


    return(
      
        <>
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-[#161E29]  text-white shadow-lg border-r-2 border-[#808080] ">
        <span className='sidebar-icon group mt-[2.25rem]'>
        <SideBarIcon icon={<AiFillHome size="28" /> } />
        <span className='sidebar-tooltip group-hover:scale-100'>
            Home
          </span>

        </span>

        </div>
         </>
    );


  
}