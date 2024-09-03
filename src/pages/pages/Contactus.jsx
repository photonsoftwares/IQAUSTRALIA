import React from 'react';
import { motion } from 'framer-motion';
import { Box, Grid, Typography, TextField, Checkbox, Button, Container } from '@mui/material';

const variant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

function Contactus({ isDesktop }) {
  return (
<Container  id="contactUs" className={`${isDesktop ? "h-[650px]" : "h-[850px]"} overflow-hidden`}>

    <Box className={`lg:${isDesktop ? 'w-3/4' : 'w-full' } `}>
      <motion.div variants={variant} initial="initial" whileInView="animate">
        <Box
       
          className="bg-gray1-100 py-16 px-4 mt-3 text-center font-poppins"
          sx={{
            pt: { xs: 1, sm: 2, md: 3 },
            pb: { xs: 2, sm: 4, md: 8 },
            maxWidth: '100%',
            mx: 'auto',
          }}
        >
          <Typography variant="h3" component="h3" className="font-bold  mb-2">
            Contact Us
          </Typography>
          <Typography variant="h6" className="font-semibold mb-2">
            Get In Touch
          </Typography>
          <Typography className="mb-8">
            We’d love to hear from you. Please fill out this form.
          </Typography>
          <Grid container className='mt-2' spacing={2} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box component="form" sx={{ '& .MuiTextField-root': { mb: 2 }, mx: 'auto' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      style={{background:"white", borderRadius:"10px"}}
                      label="First Name"
                      variant="outlined"
                      required
                      placeholder="First name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      style={{background:"white", borderRadius:"10px"}}
                      label="Last Name"
                      variant="outlined"
                      required
                      placeholder="Last name"
                    />
                  </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      style={{background:"white", borderRadius:"10px"}}
                      label="Email"
                      variant="outlined"
                      required
                      placeholder="you@company.com"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      style={{background:"white", borderRadius:"10px"}}
                      label="Phone Number"
                      variant="outlined"
                      required
                      placeholder="Mobile No. (Office)"
                    />
                  </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      style={{background:"white", borderRadius:"10px"}}
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  {/* <Grid item xs={12} className="flex items-center">
                    <Checkbox 
                     required />
                    <Typography variant="body2" className="ml-2">
                      I agree to the{' '}
                      <span className="text-blue-500 underline">privacy policy</span>.
                    </Typography>
                  </Grid> */}
                  <Grid className='mt-4' item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{background:"#3A526C"}}
                      sx={{ py: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
              
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Box>

    </Container>
  );
}

export default Contactus;
