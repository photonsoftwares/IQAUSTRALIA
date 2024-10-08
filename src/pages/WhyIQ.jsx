import React from 'react'
import {  motion } from 'framer-motion';
import { Container, Row } from 'react-bootstrap';
import { Typography } from '@mui/material';

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
function WhyIQ({isDesktop}) {
  return (
    <div className={`lg:${isDesktop ? ' w-3/4' : 'w-full'} p-8 space-y-16 ${isDesktop ? "h-[650px]" : "h-[850px]"}  overflow-hidden`}>
    <Container id="whyIQ" className=''>
    <motion.div 
      variants={variant}
      initial="initial"
      whileInView="animate"
       className="space-y-4">
         <div className="w-full flex items-center justify-center max-w-full">
              <Row className="mt-2 mb-3">
                <h1 className="m-0 text-center font-bold text-3xl">  Why IQ</h1>
              </Row>
            </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0  px-0 pb-[26px] box-border max-w-full font-poppins">
  
                <img
                  className="self-stretch h-[250px] max-w-full object-cover mb-2"
                  loading="lazy"
                  alt="Integration Architecture"
                src="/rectangle-15@2x.png"
                />
                <Typography variant="body1" className="text-2xl mt-3 leading-8">
                When it comes to choosing a technology partner, look no further than IQ. Why? Because we absolutely love what we do. Our team of experts thrives on innovation and enjoys nothing more than bringing real value to our clients.  At IQ, you are never talking to an account manager.  You talk to the architects.   

                </Typography>
                <Typography variant="body1" className="text-2xl mt-3 leading-8">
                We geek out on the latest tech trends and turn complex challenges into
          seamless solutions. With us, you’re not just getting a service
          provider; you’re getting a passionate, dedicated partner who’s as
          invested in your success as you are. 

                </Typography>
              </div>
{/* <div >
<div className="self-stretch h-[508px] flex flex-row items-start justify-start pt-0 px-[42px] pb-[26px] box-border max-w-full text-21xl mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
                <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-[inherit] mq450:text-5xl mq450:leading-[19px] mq1050:text-13xl mq1050:leading-[26px]">
                  Why IQ
                </h2>
              </div>
              <img
           className="self-stretch h-[250px] max-w-full object-cover mb-2"
                loading="lazy"
                alt=""
                src="/rectangle-15@2x.png"
              />
              
            </div>
            
          </div>
          <div className="self-stretch p-4 relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium mq450:text-lgi mq450:leading-[40px]">
          When it comes to choosing a technology partner, look no further than IQ. Why? Because we absolutely love what we do. Our team of experts thrives on innovation and enjoys nothing more than bringing real value to our clients.  At IQ, you are never talking to an account manager.  You talk to the architects.   
              </div>

          <div className="self-stretch p-4 relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium mq450:text-lgi mq450:leading-[40px]">
          We geek out on the latest tech trends and turn complex challenges into
          seamless solutions. With us, you’re not just getting a service
          provider; you’re getting a passionate, dedicated partner who’s as
          invested in your success as you are.
              </div>
    </div> */}
    </motion.div>
    </Container>
    </div>
  )
}

export default WhyIQ
