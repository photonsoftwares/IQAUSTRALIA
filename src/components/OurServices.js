import React, { useRef, useEffect } from 'react';
import GroupComponent from "./GroupComponent";
import { Row } from 'react-bootstrap';

const OurServices =() => {
 

  return (
    <section id='services' className="services pt-0 px-5 pb-[103px] box-border gap-[50px_0px] max-w-full text-left text-29xl text-white font-poppins">
    <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
      Our Services
    </h1>
    </Row>
    <div className="w-[1300px] overflow-x-auto flex flex-row items-start justify-start gap-[20px] max-w-full text-19xl">
      <GroupComponent
      
        rectangleGroup="/frame-industry-specific-expertise@2x.png"
        enterprise="Enterprise"
        architecture="Architecture"
        design="Design"
      />
      <GroupComponent
        rectangleGroup="/rectangle-27-1@2x.png"
        enterprise="Solution"
        architecture="Architecture"
        design="Development"
        propAlignSelf="unset"
        propWidth="249px"
      />
      <GroupComponent
        rectangleGroup="/rectangle-27-2@2x.png"
        enterprise="Business"
        architecture="Process"
        design="Optimization"
        propAlignSelf="stretch"
        propWidth="unset"
      />
      <div className="w-[310px] shrink-0 flex flex-col items-center justify-start pt-[50px] pb-11 pr-[41px] pl-[42px] box-border relative gap-[66px] mq450:pt-8 mq450:pb-[29px] mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-27-3@2x.png"
        />
        <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-4xl mq750:text-11xl">
          <p className="m-0">Technology</p>
          <p className="m-0">Evaluation</p>
          <p className="m-0">Integration</p>
        </h2>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[9px] text-13xl">
          <div className="flex flex-row items-center justify-start gap-[0px_20px]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-lgi mq750:text-7xl">
              More
            </h2>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[9px] h-3 relative object-contain z-[1]"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default OurServices;
