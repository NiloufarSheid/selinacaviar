import { Box, Typography} from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Firstheader = () => {
  return (
    <Grid sx={{width:"100%", height:40,fontSize:13,color:"#fff",paddingRight:10,paddingLeft:10,bgcolor:"#142d4c", "&:hover":{bgcolor:"#385170"}}} container alignItems="center" justifyContent="space-between" >
      <Grid item>
      <Box display="flex" gap={2} >
      
      <Box><LinkedInIcon/></Box>
      <Box><WhatsAppIcon/></Box>
       
       </Box>
      </Grid>

      <Grid item>
      <Box display="flex" gap={2} >
      <Box>+971585052435</Box>
      <Box><LocalPhoneIcon fontSize='small'/></Box>
      <Box>info@selinacaviar.com</Box>
      <Box><EmailIcon fontSize='small'/></Box>
      
       </Box>
      </Grid>



      
       
      </Grid>
  );
}

export default Firstheader;