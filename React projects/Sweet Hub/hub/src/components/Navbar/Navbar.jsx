/* eslint-disable react/prop-types */
import hubLogo from '../../assets/hubLogo.png';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {motion} from "framer-motion";

const Navbar = ({sideBar, setSideBar}) => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full pt-3 z-30 text-white">
        <div className="container px-0 flex justify-between items-center">
          <div>
          <motion.img initial={{opacity:0, y: -100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.1}} src={hubLogo} className="w-52 cursor-pointer" alt="" />
          </div>

          <div onClick={() => setSideBar(!sideBar)} className="bg-primary rounded-s-full rounded-tr-full p-3 z-50 cursor-pointer">
          <HiOutlineMenuAlt3 color="#fff" size={30} />
          </div>
          
        </div>
      </nav>
    </> 
  )
}

export default Navbar