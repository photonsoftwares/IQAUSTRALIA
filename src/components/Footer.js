import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="self-stretch gap-4 p-4 text-5xl text-white font-poppins">
      <Row>
        <Col xs={12} md={2}>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="text-lgi">Quick Links</b>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-medium">Contact</div>
              <div className="font-medium">FAQs</div>
              <div className="font-medium">Blogs</div>
              <div className="font-medium">News</div>
              <div className="font-medium">Pages</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="text-lgi">Services</b>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-medium">
                Software Development
              </div>
              <div className="font-medium">
                Website Development
              </div>
              <div className="font-medium">
                Application Services
              </div>
              <div className="font-medium">
                Digital Transformation
              </div>
              <div className="font-medium">
                Manage IT Services
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="text-lgi">About Us</b>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-medium">
                Our Portfolio
              </div>
              <div className="font-medium">
                Our Exports
              </div>
              <div className="font-medium">
                How To Order
              </div>
              <div className="font-medium">
                How To Order
              </div>
              <div className="font-medium">
                Arrange Meeting
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="text-lgi">Contact Us</b>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-medium">
                Noida, Delhi
              </div>
              <div className="font-medium">8400063557</div>
              <div className="font-medium whitespace-nowrap">
                shivbratmishra@gmail.com
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="h-6 w-6 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-32@2x.png"
                />
                <img
                  className="h-6 w-6 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-33@2x.png"
                />
                <img
                  className="h-6 w-6 object-cover min-h-8"
                  loading="lazy"
                  alt=""
                  src="/image-34@2x.png"
                />
                <img
                  className="h-6 w-6 object-cover min-h-8"
                  loading="lazy"
                  alt=""
                  src="/image-35@2x.png"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
 
    </footer>
  );
};

export default Footer;
