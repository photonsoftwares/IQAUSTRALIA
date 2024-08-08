import React from 'react'

import {  motion } from 'framer-motion';
import Section from './Section';
import { Grid } from '@mui/material';

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
function OurWork({isDesktop}) {
  return (
    <div className={`lg:${isDesktop ? ' w-3/4' : 'w-full'} h-100 p-8 space-y-16`}>
          <motion.div 
      variants={variant}
      initial="initial"
      whileInView="animate"
       className="space-y-4">
               <div className="text-center">
  <h2 className="text-3xl mt-2 font-bold">
    <span className="text-white text-4xl font-bold">FMCGDomain</span>
    <span className="text-blue-500 text-3xl font-bold"> CaseStudy</span>
  </h2>
  <div className="w-full h-1 bg-blue-500 mt-2"></div>
</div>

    <Section
      imgSrc="rectangle-14@2x.png"
    />

 
    
    <Grid container className='mt-1' spacing={2}>

<Grid item xs={12} md={6}>
  <Section
    title=""
    subtitle="Business Alignment "
    content=""
  /> 
      <blockquote className="bg-gray-800 p-3 italic border-l-4 border-gray-600">
      By aligning their integration strategy with their business goals, we were able to help the company achieve significant improvements in their operational efficiency and delivery capacity.
</blockquote>
   </Grid>
<Grid item xs={12} md={6}>

  <Section
    subtitle="Pragmatic Approach"
    content=""
  />
         <blockquote className="bg-gray-800 p-4 italic border-l-4 border-gray-600">
         We take a pragmatic approach to developing solutions that meet the unique needs of our clients. Our focus is on delivering innovative solutions that stand out in the market.
</blockquote>
</Grid>



</Grid>
    
    
    </motion.div>
    </div>
  )
}

export default OurWork
