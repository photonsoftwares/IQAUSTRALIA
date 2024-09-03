import React from 'react'
import {  motion } from 'framer-motion';

const variant={
    initial:{
      // x:100,
      y:100,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:1,
        staggerChildren:0.1
      }
    }
  }
function Home({isDesktop}) {
  return (
    <div className={`lg:${isDesktop ? ' w-3/4' : 'w-full'} p-8 space-y-16 ${isDesktop ? "h-[650px]" : "h-[850px]"}`}>

   
    <motion.div 
      variants={variant}
      initial="initial"
      whileInView="animate"
       className="space-y-4">
           <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[30px] text-left text-280xl-2 text-darkslategray font-pt-sans `}
    >
      <div className="h-[422.2px] w-[320px] relative">
 <img src="/iqlogo.png" className={`${isDesktop?"w-30":"w-full"} h-auto`}/>

</div></div>

</motion.div>
    </div>
  )
}

export default Home
