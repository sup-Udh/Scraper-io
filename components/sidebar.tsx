import { BsPlus, BsFillLightningFill, BsGearFill , } from 'react-icons/bs';
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaFire, FaPoo } from 'react-icons/fa';
export default function Sidebar(){
    const SideBarIcon = ({ icon } : {icon: any}) => (
        <div className="sidebar-icon group">
          {icon}

         

        </div>
    ) 


    return(
        <>
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <span className='sidebar-icon group'>
        <SideBarIcon icon={<AiFillHome size="28" /> } />
        <span className='sidebar-tooltip group-hover:scale-100'>
            tool tip 1
          </span>

        </span>
        <span className='sidebar-icon group'>
        <SideBarIcon icon={<BsPlus size="32" />} />
        <span className='sidebar-tooltip group-hover:scale-100'>
            tool tip2 
          </span>


        </span>

        <span className='sidebar-icon group'>
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />

        <span className='sidebar-tooltip group-hover:scale-100'>
            tool tip3
          </span>


        </span>

        <span className='sidebar-icon group'>
        <SideBarIcon icon={<AiFillInfoCircle size="20" />} />

        <span className='sidebar-tooltip group-hover:scale-100'>
            tool tip4
          </span>

        </span>

        <span className='sidebar-icon group'>
        <SideBarIcon icon={<BsGearFill size="20" />} />
        <span className='sidebar-tooltip group-hover:scale-100'>
            tool tip5
          </span>
        </span>

        </div>
         </>
    );


  
}