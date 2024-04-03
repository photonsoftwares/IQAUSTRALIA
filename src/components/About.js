import React from 'react';
import { Row,Col } from 'react-bootstrap';
const About =() => {
   
    return (
      <>
      <section id='aboutUs' className="aboutUs pt-0 px-5 pb-[103px] box-border gap-[50px_0px] max-w-full text-left text-29xl text-white font-poppins">
      <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
              Our About
            </h1></Row>
            <Row className="mb-5"> 
            <b  style={{width:"100%"}} className="m-0 relative container font-semibold d-grid justify-center inline-block max-w-full" >
              <h4 className="m-0">
                "Seamless Integration, Elevated Performance Innovationquotient
                Workato Experts Drive
              </h4>
              <h4 className="m-1">
                Your Business Forward. Streamline, Connect, Propel - Trust Us to
                Simplify Complexity
              </h4>
              <h4 className="m-1">
                and Amplify Efficiency. Embrace Integration Excellence with
                Innovationquotient."
              </h4>
            </b>
            </Row>
     
            <Row className="mb-5">
      <Col xs={12} md={6} className="d-flex flex-column align-items-start">
      <h3 className="m-0 relative font-medium mt-5  ">
            <p className="m-0">At Innovationquotient, Workato is our secret</p>
            <p className="m-0">weapon for efficiency. As the Integration</p>
            <p className="m-0">Expert, I've seen how Workato streamlines</p>
            <p className="m-0">our operations, connecting apps seamlessly</p>
            <p className="m-0">and automating repetitive tasks. It's our</p>
            <p className="m-0">go-to for rapid deployment and scalability,</p>
            <p className="m-0">driving our success.</p>
          </h3>     </Col>
        <Col xs={12} md={6}>
          <img
            className="h-[725px] w-[563px] relative max-w-full mq1225:flex-1"
            loading="lazy"
            alt=""
            src="/group-77162.svg"
          />
        </Col>
      </Row>
      </section>
      </>
    );
  }
  
  export default About;
  