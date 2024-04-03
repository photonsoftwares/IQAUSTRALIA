import { Col, Row } from "react-bootstrap";

const WhyIQ = () => {
  return (
    <section id='whyIQ' className="whyIQ pt-0 px-5 pb-[103px] box-border gap-[50px_0px] max-w-full text-left text-29xl text-white font-poppins">
     <Row className="mb-5"> <h1 className="m-0 text-center  font-bold font-inherit mb-5">
            <p className="m-0">Why Choose IQ for</p>
            <p className="m-0">Workato Integration?</p>
          </h1></Row>
      
          <Row className="mb-5"> 
              <h3 style={{width:"100%"}} className="m-0 relative container font-semibold d-grid justify-center inline-block max-w-full ">
                <p className="m-0">
                  At IQ, we are dedicated to optimizing and future-proofing your
                  business
                </p>
                <p className="m-0">
                  through comprehensive Enterprise and Solution Architecture
                  services. With a
                </p>
                <p className="m-0">
                  wealth of experience spanning Retail, Education, and Defence
                  sectors, our
                </p>
                <p className="m-0">
                  team brings unparalleled expertise to tailor strategies that
                  align with your
                </p>
                <p className="m-0">
                  industry-specific needs and overarching business goals
                </p>
              </h3>
              </Row>
            <Row className="mb-5">
      <Col xs={12} md={6} className="d-flex flex-column align-items-start">
        <h1 className="m-0 text-inherit font-semibold text-10xl mb-3">
                    Expert Guidance
                  </h1>
             
                <h3 className="m-0 relative font-medium   ">
                  <p className="m-0">Our team comprises certified Workato</p>
                  <p className="m-0">professionals with extensive experience</p>
                  <p className="m-0">in crafting custom integrations across</p>
                  <p className="m-0">various industries. We understand the</p>
                  <p className="m-0">
                    intricacies of your business and provide
                  </p>
                  <p className="m-0">
                    tailored solutions to enhance efficiency
                  </p>
                </h3>
                </Col>
        <Col xs={12} md={6}>
        <img
            className="mt-2 h-[424px] w-100 rounded-mini object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-17964-2@2x.png"
          />
           
             </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} md={6}>
       
        <img
            className="mt-2 h-[424px] w-100 rounded-mini object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-17965-1@2x.png"
          />
             </Col>
        <Col xs={12} md={6}>
          <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[364px] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] max-w-full mq750:gap-[40px_0px]">
              <h1 className="m-0  relative  font-semibold  inline-block max-w-full ">
                Customized Solutions
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0  ">
                <h3 className="m-0 relative  font-medium ">
                  <p className="m-0">No two businesses are alike. We take a</p>
                  <p className="m-0">personalized approach …Enterprise and</p>
                  <p className="m-0">Solution Architecture Expertise</p>
                </h3>
              </div>
            </div>
          </div>
          </Col>
      </Row>
  
    </section>
  );
};

export default WhyIQ;
