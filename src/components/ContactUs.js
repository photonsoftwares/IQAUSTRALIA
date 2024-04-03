import { TextField } from '@mui/material';
import React from 'react';
import { Row } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <section id='contactUs' className="contactUs pt-0 px-5 pb-[103px] box-border gap-[50px_0px] max-w-full text-left text-29xl text-white font-poppins">
    <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
        Contact Us
      </h1></Row>
      <Row className="mb-5"> 
      <h3 className="m-0 w-[100%]  relative  font-semibold  inline-block ">
        <p className="m-0">
          "Seamless Integration, Infinite Solutions: Powering Progress with
        </p>
        <p className="m-0">Workato at Innovationquotient!"</p>
      </h3></Row>
      <div className="w-[100%] flex flex-col items-center justify-start  max-w-full ">
      <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
            Get In Touch
          </h1>
        </Row>
        <div className="rounded-5 self-stretch rounded-31xl bg-white flex flex-row items-center justify-between py-0 pr-0 pl-[30px] box-border max-w-full gap-[20px] text-5xl text-gray mq750:flex-wrap mq750:justify-center mq750:p-5 mq750:box-border">
          <TextField
            className='mt-2 self-stretch w-[100%] relative rounded-31xl bg-white max-w-full'
            label="Enter Your Email"
            variant="outlined"
          />
          <button className="bg-dimgray cursor-pointer border-none pt-4 pb-[15px] pr-[50px] pl-[49px] rounded-5 rounded-31xl flex flex-row items-center justify-center z-[1] hover:bg-dimgray-100">
            <div className="h-[67px] w-[223px] relative rounded-31xl bg-darkslategray hidden" />
            <b className="relative text-5xl font-poppins text-white text-center z-[2] mq450:text-lgi">
              Subscribe
            </b>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
