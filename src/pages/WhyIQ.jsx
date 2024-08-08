import React from 'react'
import Section from './pages/Section'
import {  motion } from 'framer-motion';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
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

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    backgroundImage: `url(${main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '20px',
    color: '#fff',
    padding: theme.spacing(8, 0),
    height: '400px',
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  },
  gridContainer: {
    position: 'relative',
    marginTop: '-250px',
    zIndex: 3,
    '@media (max-width:600px)': {
      marginTop: '-200px',
    },
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
  },
  featureContainer: {
    padding: theme.spacing(4),
    background: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: theme.spacing(4),
  },
  featureContent: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  featureImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxWidth: '500px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
      marginRight: theme.spacing(4),
      marginBottom: 0,
    },
  },
  featureText: {
    flex: 1,
    textAlign: 'left',
  },
  sectionTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  list: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  imageContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      paddingRight: theme.spacing(2),
    },
  },
}));
function WhyIQ({isDesktop}) {
  const classes = useStyles();

  return (
    <div className={`lg:${isDesktop ? ' w-3/4' : 'w-full'} h-100 p-8 space-y-16`}>

    <motion.div 
    variants={variant}
    initial="initial"
    whileInView="animate"
     className="space-y-4">
<div id="whyIQ">
<div className="self-stretch h-[508px] flex flex-row items-start justify-start pt-0 px-[42px] pb-[26px] box-border max-w-full text-21xl mq1050:pl-[21px] mq1050:pr-[21px] mq1050:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
                <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-[inherit] mq450:text-5xl mq450:leading-[19px] mq1050:text-13xl mq1050:leading-[26px]">
                  Why IQ
                </h2>
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-15@2x.png"
              />
              
            </div>
            
          </div>
          <div className="self-stretch relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium mq450:text-lgi mq450:leading-[40px]">
          When it comes to choosing a technology partner, look no further than IQ. Why? Because we absolutely love what we do. Our team of experts thrives on innovation and enjoys nothing more than bringing real value to our clients.  At IQ, you are never talking to an account manager.  You talk to the architects.   
              </div>

          <div className="self-stretch relative text-5xl tracking-[1px] leading-[50px] font-text-md-medium mq450:text-lgi mq450:leading-[40px]">
          We geek out on the latest tech trends and turn complex challenges into
          seamless solutions. With us, you’re not just getting a service
          provider; you’re getting a passionate, dedicated partner who’s as
          invested in your success as you are.
              </div>
  </div>
  </motion.div>
  </div>
  )
}

export default WhyIQ