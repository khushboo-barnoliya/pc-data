import BgImage from '../../assets/bg2.jpg';
import iceMain from '../../assets/iceMain.png';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';


const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const Hero = () => {

  const [sideBar, setSideBar] = useState(false)

  return (
    <>
      <main style={bgImage}>
        <section className="min-h-[750px] w-full">

          <div className="container relative">

            {/* navbar starts */}
            <Navbar sideBar={sideBar} setSideBar={setSideBar} />
            {/* navbar end */}

            <div className="grid w-full grid-cols-3  place-items-center min-h-[850px]">

              {/* left box starts */}
              <div className="heroLeft mt-[100px] md:mt-0 p-1 space-y-28">
                <motion.h1 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }} className='text-dark text-5xl leading-tight font-bold uppercase ml-14'>Choco Fudge Cone</motion.h1>

                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }} className="relative space-y-4 z-10">
                  <h1 className='text-2xl text-dark'>Fudge Lovers,</h1>
                  <p className='text-sm opacity-60'>Ice cream lovers are the sun&apos;s best friends, always ready for a cold, creamy cone of happiness. They greet summer with open arms (and wider stomachs) and can spot a waffle cone from a mile away. </p>
                  <div className="absolute -z-10 w-[220px] h-[220px] rounded-e-full rounded-bl-full bg-secondary/80 -top-14  -left-8"></div>
                </motion.div>
              </div>
              {/* left box ends */}


              {/* middle image section starts */}
              <div className="relative">
                <motion.img initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }} src={iceMain} className='relative z-40 w-80 md:w-96 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.4)]' alt="" />
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }} className="absolute z-10 border-secondary bottom-16 left-20 rounded-full border-[15px] h-[180px] w-[180px]"></motion.div>
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }} className="absolute z-10 border-primary top-10 right-16 rounded-full border-[15px] h-[180px] w-[180px]"></motion.div>


              </div>
              {/* middle image section ends */}

              <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }} className='absolute -top-5 left-[510px]'>
                <h1 className='uppercase scale-100 text-[10vw] leading-none font-bold text-slight/40'>choco <br />fudge</h1>
              </motion.div>

              {/* right box starts */}
              <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }} className="relative space-y-4 z-10 mt-0 lg:mt-[300px]">
                <h1 className='text-2xl text-dark text-end'>Chocolate</h1>
                <p className='text-sm opacity-60 text-end'>
                  Chocolate, a luxurious treat, melts on your tongue in a symphony of rich, cocoa flavor. From deep, dark to creamy milk, it offers a decadent escape, enjoyed in bars, cakes, or simply savored by itself.  </p>
                <div className="absolute -z-10 w-[220px] h-[220px] rounded-s-full rounded-tr-full bg-primary/80 -bottom-10 -right-8"></div>
              </motion.div>
              {/* right box ends */}

            </div>
          </div>


          {
            sideBar && (
              <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} className="absolute z-20 w-[140px] h-full top-0 right-0 bg-gradient-to-b from-slate-700 to-slate-950 shadow-[-2px_0px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                  <div className="w-[1px] h-[70px] bg-[#D8B28D]"></div>
                  <div className="flex flex-col gap-5">
                    <FaFacebook color="#D8B28D" size={20} className="cursor-pointer" />
                    <RiTwitterXFill color="#D8B28D" size={20} className="cursor-pointer" />
                    <SiInstagram color="#D8B28D" size={20} className="cursor-pointer" />
                    <FaLinkedin color="#D8B28D" size={20} className="cursor-pointer" />
                  </div>
                  <div className="w-[1px] h-[70px] bg-[#D8B28D]"></div>
                </div>
              </motion.div>
            )
          }


        </section>
      </main>
    </>
  )
}

export default Hero