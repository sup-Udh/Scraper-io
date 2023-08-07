import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
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
        <SideBarIcon icon={<FaFire size="28" /> } />
        <span className='sidebar-tooltip group-hover:scale-100'>
            tool tip 
          </span>

        </span>

        
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <SideBarIcon icon={<BsGearFill size="20" />} />
        </div>
         </>
    );


  
}