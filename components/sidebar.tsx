import Image from "next/image"
import pluse from "../public/plus.png"
const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-[#09090A] border border-[#1F1F22] shadow-lg">
            <div>
                <span className="sidebar-icon">
                    <Image 
                        src={pluse}
                        alt="pluse"
                        width={25}
                        height={24}
                    />
                    
                </span>
            </div>
        
        </div>
    )

}
export default SideBar