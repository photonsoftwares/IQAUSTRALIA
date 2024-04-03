import React from 'react';
import FrameComponent1 from "./FrameComponent1";
import { Row, Col } from 'react-bootstrap';
const Specialisations = () => {
 

  return (
    <section id='specialisations' className="specialisations pt-0 px-5 pb-[103px] box-border gap-[50px_0px] max-w-full text-left text-29xl text-white font-poppins">
     <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
      Our Specialisations
    </h1></Row>
    <Row className="mb-5">
      <Col xs={12} md={6} className="d-flex flex-column align-items-start">
        <h1 className="m-0 text-inherit font-semibold text-10xl mb-3">
          Retail Excellence
        </h1>
     
        <h3 className="m-0  font-medium text-center">
          <p className="m-0">From enhancing customer experiences to</p>
          <p className="m-0">optimizing supply chains, we understand</p>
          <p className="m-0">the intricate workings of the retail</p>
          <p className="m-0">landscape. With extensive experience in this</p>
          <p className="m-0">sector, our solutions focus on maximizing</p>
          <p className="m-0">operational efficiency, integrating</p>
          <p className="m-0">omnichannel experiences, and leveraging</p>
          <p className="m-0">data analytics to drive growth and</p>
          <p className="m-0">customer satisfaction</p>
        </h3>
        </Col>
        <Col xs={12} md={6}>
          <img
            className="mt-2 h-[424px] w-100 rounded-mini object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-17964@2x.png"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} md={6}>
          <img
            className="h-[424px] w-100 rounded-mini object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-17965@2x.png"
          />
        </Col>
        <Col xs={12} md={6}>
      <FrameComponent1
        educationInnovation="Education Innovation"
        educationDemandsDynamicSo="Education demands dynamic solutions."
        weCraftArchitecturesThatS="We craft architectures that support"
        eLearningPlatformsStudent="e-learning platforms, student information"
        systemsAndAdministrativeP="systems, and administrative processes,"
        empoweringEducationalInst="empowering educational institutions to"
        deliverQualityEducationWh="deliver quality education while managing"
        resourcesEffectively="resources effectively"
      />
     </Col>
      </Row>

     <Row>
        <Col xs={12} md={6}>
      <FrameComponent1
        educationInnovation="Defence Solutions"
        educationDemandsDynamicSo="There are unique requirements within the"
        weCraftArchitecturesThatS="defence sector, and our architectures"
        eLearningPlatformsStudent="prioritize security, interoperability, and"
        systemsAndAdministrativeP="mission-critical functionality. We design"
        empoweringEducationalInst="solutions that adhere to stringent"
        deliverQualityEducationWh="standards while enabling seamless"
        resourcesEffectively="collaboration and data management"
        propGap="33px 0px"
        propMinWidth="582px"
      />    </Col>
      <Col xs={12} md={6}>
      <img
        className="h-[424px] w-[565px] relative rounded-mini object-cover max-w-full mq1225:flex-1"
        alt=""
        src="/rectangle-17964-1@2x.png"
      />
        </Col>
      </Row>
  </section>
  );
}

export default Specialisations;
