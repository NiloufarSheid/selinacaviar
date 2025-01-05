import React from 'react';
import Firstheader from './components/firsthead/Firstheader';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={{
      position:"fixed",
      top:0,
      left:0,
      width:"100%",
     backgroundColor:"rgb(2, 3, 129)"
    }}>
      <Firstheader/>
    </Box>
  );
}

export default App;