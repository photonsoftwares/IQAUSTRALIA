import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ServicesCardsColumns from './CardServices';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OurServices = ({ isDesktop, setStep }) => {
  const navigate = useNavigate();

  const handleServicesCardsButtonsClick = useCallback((stepNumber) => {
    setStep(stepNumber);
    navigate('/Specialisations', { state: { step: stepNumber } });
  }, [navigate, setStep]);

  const variant = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 }
    }
  };

  return (
    <Container id="services" className={`${isDesktop ? "h-[650px]" : "fit-content "} overflow-hidden`}>
      <motion.div
        variants={variant}
        initial="initial"
        whileInView="animate"
        className="space-y-1"
      >
        <Box className="text-left text-darkslateblue  font-text-md-medium ">
          <Box className="text-center text-13xl text-white font-text-md-medium ">
            <Typography variant="h3" className="text-white font-inherit font-bold mt-4 mb-4">
              Our Services
            </Typography>
          </Box>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={5} md={5}>
              <ServicesCardsColumns
                isDesktop={isDesktop}
                group1000015039="/group-1000015039@2x.png"
                iTStrategyAndArchitecture="IT Strategy and Architecture"
                onServicesCardsButtonsClick={() => handleServicesCardsButtonsClick(1)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <ServicesCardsColumns
                isDesktop={isDesktop}
                group1000015039="/rectangle-17981@2x.png"
                iTStrategyAndArchitecture="Technology Innovation"
                onServicesCardsButtonsClick={() => handleServicesCardsButtonsClick(2)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <ServicesCardsColumns
                isDesktop={isDesktop}
                group1000015039="/rectangle-17980@2x.png"
                iTStrategyAndArchitecture="Integration Architecture"
                onServicesCardsButtonsClick={() => handleServicesCardsButtonsClick(3)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <ServicesCardsColumns
                isDesktop={isDesktop}
                group1000015039="/rectangle-17981-1@2x.png"
                iTStrategyAndArchitecture="Retail Domain Expertise"
                onServicesCardsButtonsClick={() => handleServicesCardsButtonsClick(4)}
              />
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

OurServices.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default OurServices;
