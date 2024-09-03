import React, { useState, useCallback } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Row } from 'react-bootstrap';

const variant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const specialisations = [
  {
    title: 'Retail Domain Expertise',
    image: '/path/to/retail-domain-expertise-image.png', // Replace with the correct path to the image
  },
  {
    title: 'Education Innovation',
    image: '/path/to/education-innovation-image.png', // Replace with the correct path to the image
  },
  {
    title: 'Defence Solutions',
    image: '/path/to/defence-solutions-image.png', // Replace with the correct path to the image
  },
];

const Specialisations = ({step,setStep,isDesktop}) => {


  const handleStepChange = useCallback((newStep) => {
    setStep(newStep);
  }, []);

  return (
    <Container id="specialisations" className={`${isDesktop ? "h-[650px]" : "h-[850px]"} overflow-hidden`}>
      <motion.div variants={variant} initial="initial" whileInView="animate">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
          <div className="flex-1 flex flex-col  justify-start py-0 px-[42px] box-border gap-[50px] max-w-full">
            <div className="w-full flex items-center justify-center max-w-full">
              <Row className="mt-4">
                <h1 className="m-0 text-center font-bold text-3xl">Our Specialisations</h1>
              </Row>
            </div>
            <div className={`flex flex-wrap -mt-4 justify-center ${isDesktop? "gap-24":"gap-4"}`}>
  {[1, 2, 3, 4].map((item) => (
    <div
      key={item}
      onClick={() => handleStepChange(item)}
      className={`h-1 ${isDesktop? "w-36":"w-10"} cursor-pointer ${
        step === item ? 'bg-white' : 'bg-gray-600'
      }`}
    />
  ))}
</div>


            {step === 1 && (
              <div className="self-stretch flex flex-col items-start justify-start pt-0 -mt-5 px-0 pb-[26px] box-border max-w-full font-poppins">
                <Typography variant="h4" className="text-left text-white font-medium mb-4">
                  IT Strategy and Architecture Roadmap
                </Typography>
                <img
                  className="self-stretch h-[250px] max-w-full object-cover mb-4"
                  loading="lazy"
                  alt="IT Strategy and Architecture"
                  src="/group-1000015039-1@2x.png"
                />
                <Typography variant="body1" className="text-2xl leading-8 whitespace-pre-wrap">
                  We provide a clear, actionable roadmap for your IT architecture,
                  ensuring seamless integration, scalability, and resilience. You
                  need to applications architecture to carry your business
                  forwards, without costing the earth. By leveraging our deep
                  industry knowledge and innovative approach, we transform complex
                  challenges into strategic opportunities, empowering your
                  business to thrive in the digital age. The IQ team specializes
                  in crafting comprehensive, forward-thinking strategies that
                  align with your business goals and drive sustainable growth. Our
                  fields of experience include Retail, Education, Defense, FMCG
                  and Government.
                </Typography>
              </div>
            )}

            {step === 2 && (
          <div className="self-stretch flex flex-col items-start justify-start pt-0 -mt-5 px-0 pb-[26px] box-border max-w-full font-poppins">
          <Typography variant="h4" className="text-left text-white font-medium mb-4">
                  Technology Innovation
                </Typography>
                <img
                  className="self-stretch h-[270px] max-w-full object-cover mb-4"
                  loading="lazy"
                  alt="Technology Innovation"
                  src="/rectangle-17981-2@2x.png"
                />
                <Typography variant="body1" className="text-2xl leading-8">
                  In today's rapidly evolving marketplace, the ability to innovate
                  is not just an advantage—it's a necessity. IQ prides itself on
                  fostering a culture of creativity and forward-thinking,
                  empowering our team to develop groundbreaking solutions that
                  drive business success. With a keen focus on innovation, we
                  harness the latest technologies and methodologies to transform
                  challenges into opportunities, ensuring our clients stay ahead
                  of the competition.
                </Typography>
              </div>
            )}

            {step === 3 && (
          <div className="self-stretch flex flex-col items-start justify-start pt-0 -mt-5 px-0 pb-[26px] box-border max-w-full font-poppins">
        <Typography variant="h4" className="text-left text-white font-medium mb-2">
                  Integration Architecture and Development
                </Typography>
                <img
                  className="self-stretch h-[250px] max-w-full object-cover mb-2"
                  loading="lazy"
                  alt="Integration Architecture"
                  src="/rectangle-3@2x.png"
                />
                <Typography variant="body1" className="text-2xl leading-8">
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
                </Typography>
              </div>
            )}

            {step === 4 && (
      <div className="self-stretch flex flex-col items-start justify-start pt-0 -mt-5 px-0 pb-[26px] box-border max-w-full font-poppins">
 <Typography variant="h4" className="text-left text-white font-medium mb-4">
                  Retail Domain Expertise
                </Typography>
                <img
                  className="self-stretch h-[295px] max-w-full object-cover mb-4"
                  loading="lazy"
                  alt="Retail Domain Expertise"
                  src="/rectangle-17981-3@2x.png"
                />
                <Typography variant="body1" className="text-2xl leading-8">
                  At IQ, we have extensive experience working with retail
                  organizations to develop IT solutions that optimize operations
                  and enhance customer experience. Retail means detail. Our
                  solutions are tailored to meet the unique needs of each client
                  and deliver measurable outcomes.
                </Typography>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Specialisations;
