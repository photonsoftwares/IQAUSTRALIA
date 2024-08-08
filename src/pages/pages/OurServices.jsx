import { useCallback } from "react";
import PropTypes from "prop-types";
import ServicesCardsColumns from "./CardServices";
import {  motion } from 'framer-motion';

const OurServices = ({ isDesktop}) => {
  const onServicesCardsButtonsClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesDescriptionRows']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick2 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);


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
  return (
    <motion.div 
    variants={variant}
    initial="initial"
    whileInView="animate"
     className="space-y-4">
    <div
     id="services"
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full text-left text-11xl-9 text-darkslateblue font-text-md-medium `}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[4.6px] max-w-full">
     
        <div className="self-stretch flex flex-col items-end justify-start pt-[50px] px-[42px] pb-[60px] box-border gap-[50px] max-w-full text-center text-29xl text-white font-poppins mq750:gap-[25px] mq750:pt-8 mq750:pb-[39px] mq750:box-border mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border">
          <div
            className="w-[1040px] h-[490px] relative hidden max-w-full"
            data-scroll-to="rectangle"
          />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <h1 className="text-nowrap m-0 w-[311px] relative text-inherit font-bold font-[inherit] inline-block z-[1] mq450:text-10xl mq1050:text-19xl">
              Our Services
            </h1>
          </div>
          <div className="self-stretch grid flex-row items-center justify-start gap-8 grid-cols-[repeat(4,_minmax(161px,_1fr))] z-[1] text-left text-4xs-6 mq450:grid-cols-[minmax(161px,_1fr)] mq750:gap-4 mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(161px,_279px))]">
            <ServicesCardsColumns
            isDesktop={isDesktop}
              group1000015039="/group-1000015039@2x.png"
              iTStrategyAndArchitecture="IT Strategy and Architecture "
              onServicesCardsButtonsClick={onServicesCardsButtonsClick}
            />
            <ServicesCardsColumns
            isDesktop={isDesktop}

              group1000015039="/rectangle-17981@2x.png"
              iTStrategyAndArchitecture="Technology Innovation"
              onServicesCardsButtonsClick={onFrameContainerClick}
            />
            <ServicesCardsColumns
            isDesktop={isDesktop}

              group1000015039="/rectangle-17980@2x.png"
              iTStrategyAndArchitecture="Integration Architecture "
              onServicesCardsButtonsClick={onFrameContainerClick1}
            />
            <ServicesCardsColumns
            isDesktop={isDesktop}

              group1000015039="/rectangle-17981-1@2x.png"
              iTStrategyAndArchitecture="Retail Domain Expertise"
              onServicesCardsButtonsClick={onFrameContainerClick2}
            />
          </div>
        </div>
      </div>
    
    </div>
    </motion.div>
  );
};

OurServices.propTypes = {
  className: PropTypes.string,
};

export default OurServices;
