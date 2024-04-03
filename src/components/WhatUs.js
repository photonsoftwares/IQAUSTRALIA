import React from 'react';
import WhatUsCard from "./WhatUsCard";
import { Row } from 'react-bootstrap';

const WhatUs =   (props, ref) => {
   
  return (
    <section id='whatUs' className="whatUs pt-0 px-5 pb-[103px] box-border gap-[50px_0px] max-w-full text-left text-29xl text-white font-poppins">
    <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
        What Sets Us Apart
      </h1></Row>
      <div className="w-[1300px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[30px] max-w-full text-19xl">
        <div className="w-[413px] shrink-0 flex flex-col items-center justify-start pt-[50px] px-[38px] pb-11 box-border relative gap-[259px] mq750:pt-8 mq750:pb-[29px] mq750:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-17966@2x.png"
          />
          <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-4xl mq750:text-11xl">
            <p className="m-0">Industry-</p>
            <p className="m-0">Specific Expertise</p>
          </h2>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-3 text-13xl">
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
        <WhatUsCard
          rectangle17966="/rectangle-17966-1@2x.png"
          holistic="Holistic"
          approach="Approach"
        />
        <WhatUsCard
          rectangle17966="/rectangle-17966-2@2x.png"
          holistic="Security and"
          approach="Compliance"
          propAlignSelf="unset"
          propPadding="0px 35px 0px 0px"
        />
      </div>
    </section>
  );
}

export default WhatUs;
