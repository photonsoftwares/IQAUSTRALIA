import React from 'react';
import Section from './Section';
import { Grid, TextField, Button, InputLabel, Select, MenuItem, FormControl, duration, Container } from '@mui/material';
import OurServices from './OurServices';
import OurSpecialisations from './OurSpecialisations';
import {  motion } from 'framer-motion';
import Contactus from './Contactus';

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

const MainContent = ({ isDesktop }) =>{ 



return (
  <div className={`lg:${isDesktop ? ' w-3/4' : 'w-full'} p-8 space-y-16`}>

   
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


    <OurServices isDesktop={isDesktop} />
    <OurSpecialisations />




    <Contactus />
  </div>
);
}
export default MainContent;
