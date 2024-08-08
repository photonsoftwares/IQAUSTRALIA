import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Section from './Section';
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

const specialisations = [
  {
    title: 'Retail Domain Expertise',
    image: 'path/to/retail-domain-expertise-image.png', // Replace with the correct path to the image
  },
  {
    title: 'Education Innovation',
    image: 'path/to/education-innovation-image.png', // Replace with the correct path to the image
  },
  {
    title: 'Defence Solutions',
    image: 'path/to/defence-solutions-image.png', // Replace with the correct path to the image
  },
];

const Specialisations = () => {
  return (
  
    <Container id="specialisations" className=''>
     <motion.div 
    variants={variant}
    initial="initial"
    whileInView="animate">
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
            <div
              className="flex-1 flex flex-col items-start justify-start py-0 px-[42px] box-border gap-[50px] max-w-full mq750:gap-[25px] mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border"
              data-scroll-to="servicesDescriptionRows"
            >
              <div className="self-stretch relative leading-[60px] font-medium mq450:text-lgi mq450:leading-[36px] mq1050:text-7xl mq1050:leading-[48px]">
                IT Strategy and Architecture Roadmap
              </div>
              <img
                className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/group-1000015039-1@2x.png"
              />
              <div className="self-stretch relative text-5xl tracking-[1px] leading-[50px] whitespace-pre-wrap mq450:text-lgi mq450:leading-[40px]">
                We provide a clear, actionable roadmap for your IT architecture,
                ensuring seamless integration, scalability, and resilience. You
                need to applications architecture to carry your business
                forwards, without costing the earth. By leveraging our deep
                industry knowledge and innovative approach, we transform complex
                challenges into strategic opportunities, empowering your
                business to thrive in the digital age. The IQ team specializes
                in crafting comprehensive, forward-thinking strategies that
                align with your business goals and drive sustainable growth. Our
                fields of experience include Retail, Education, Defence, FMCG
                and Government.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full font-poppins">
            <div
              className="flex-1 flex flex-col items-start justify-start py-0 px-[42px] box-border gap-[50px] max-w-full mq750:gap-[25px] mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border"
              data-scroll-to="frameContainer2"
            >
              <div className="self-stretch relative font-semibold mq450:text-lgi mq1050:text-7xl">
                Technology Innovation
              </div>
              <img
                className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-17981-2@2x.png"
              />
              <div className="self-stretch relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium inline-block min-h-[350px] mq450:text-lgi mq450:leading-[40px]">
                In today's rapidly evolving marketplace, the ability to innovate
                is not just an advantage—it's a necessity. IQ prides itself on
                fostering a culture of creativity and forward-thinking,
                empowering our team to develop groundbreaking solutions that
                drive business success. With a keen focus on innovation, we
                harness the latest technologies and methodologies to transform
                challenges into opportunities, ensuring our clients stay ahead
                of the competition.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full font-poppins">
            <div
              className="flex-1 bg-gray1-100 flex flex-col items-start justify-start pt-[50px] px-[42px] pb-[73px] box-border gap-[50px] max-w-full lg:pt-8 lg:pb-[47px] lg:box-border mq750:gap-[25px] mq750:pt-[21px] mq750:pb-[31px] mq750:box-border mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border"
              data-scroll-to="frameContainer1"
            >
              <div className="w-[746px] relative font-semibold inline-block max-w-full mq450:text-lgi mq1050:text-7xl">
                Integration Architecture and Development
              </div>
              <img
                className="self-stretch h-[491px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-3@2x.png"
              />
              <div className="self-stretch relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium whitespace-pre-wrap inline-block min-h-[550px] mq450:text-lgi mq450:leading-[40px]">
                As a Workato Gold Partner, IQ specialises in delivering top-tier
                integration architecture and development services that
                seamlessly connect your business applications and automate
                workflows. A fast car needs a great driver. Our expertise
                ensures that your systems communicate effortlessly, enabling you
                to unlock the full potential of your data and drive efficiency
                across your organization. By leveraging Workato's powerful
                platform, we design and implement customized solutions that are
                both scalable and robust, tailored to meet your unique business
                needs. Trust us to transform your digital landscape with
                innovative integrations that enhance productivity, streamline
                operations, and provide a competitive edge in today's fast-paced
                market.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[76px] box-border max-w-full font-poppins mq450:pb-8 mq450:box-border mq1050:pb-[49px] mq1050:box-border">
            <div
              className="flex-1 flex flex-col items-start justify-start py-0 px-[42px] box-border gap-[50px] max-w-full mq750:gap-[25px] mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border"
              data-scroll-to="frameContainer"
            >
              <div className="self-stretch relative font-semibold mq450:text-lgi mq1050:text-7xl">
                Retail Domain Expertise
              </div>
              <img
                className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-17981-3@2x.png"
              />
              <div className="self-stretch relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium mq450:text-lgi mq450:leading-[40px]">
                At IQ, we have extensive experience working with retail
                organizations to develop IT solutions that optimize operations
                and enhance customer experience. Retail means detail. Our
                solutions are tailored to meet the unique needs of each client
                and deliver measurable outcomes.
              </div>
            </div>
          </div>
      
           </motion.div>
 
    </Container>

  );
};

export default Specialisations;
