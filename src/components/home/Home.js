import React from 'react';
import Header from '../common/Header.js';
import { Box } from '@mui/material';

function Home() {
  const IntroductSection = (
    <Box sx={{display:{ sm:'flex' , xs :'block'}}}>
      <Box sx={{width:'50%'}}>
        THANH DEP TRAI
      </Box>
      <Box sx={{width:'50%'}}>
        <img src="/img/homeImg/customer.png" alt="Customer" style={{width:'100%'}}/>
      </Box>
    </Box>
  );
  return (
    <div>
      <Header />
      <Box sx={{marginTop: {lg:0,sm:'17px'}}}>
        {IntroductSection}
      </Box>
    </div>
  );
}

export default Home;
