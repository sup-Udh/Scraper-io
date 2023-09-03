import Image from "next/image"
import notifications from "../public/notifsvg.svg"
import pluse from "../public/plus.svg"
import analytics from "../public/analytics.svg"
import documentation from "../public/doc.svg"
import exports from "../public/export.svg"
import logo from "../public/logo.svg"
import logout from "../public/logout.svg"
const SideBar = () => {
    return(
        <>
        <body>
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-[#09090A] border border-[#1F1F22] shadow-lg">
            {/* Main logo */}
            <div>
            <span className="sidebar-icon ">
                    <Image 
                
                        src={logo}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>

            </div>
            <div className="flex flex-col space-y-4">
                <span className="sidebar-icon ">
                    <Image 
                
                        src={pluse}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>

                <span className="sidebar-icon ">
                    <Image 
                
                        src={analytics}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>

                <span className="sidebar-icon ">
                    <Image 
                
                        src={notifications}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>

                <span className="sidebar-icon ">
                    <Image 
                
                        src={documentation}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>

                <span className="sidebar-icon ">
                    <Image 
                
                        src={exports}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>
                
            </div>

            {/* logout.svg */}
            <div className="my-[20rem]">
                <span>
                <span className="sidebar-icon ">
                    <Image 
                
                        src={logout}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>
                </span>
            </div>
        
        </div>


        </body>
        </>
    )

}
export default SideBar