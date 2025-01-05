import { Box, Typography} from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Link} from '@mui/material';


const Firstheader = () => {
  return (
    <Grid sx={{width:"100%", height:40,fontSize:13,color:"#fff",paddingRight:10,paddingLeft:10,bgcolor:"#142d4c", "&:hover":{bgcolor:"#385170"}}} container alignItems="center" justifyContent="space-between" >
      <Grid item>
      <Box display="flex" gap={2} >
      
      <Box>
        <Link color='#fff' fontSize="small" href='https://www.linkedin.com/in/niloufar-sheid/'>
          <LinkedInIcon/>
         </Link>
      </Box>
      
      <Box>
        <Link color='#fff' fontSize="small" href='https://api.whatsapp.com/send?phone=971585052435'><WhatsAppIcon/> </Link>
      </Box>
       
       </Box>
      </Grid>

      <Grid item>
      <Box display="flex"  gap={2} >
      <Box>+971585052435</Box>
      <Box>
        <Link color='#fff' fontSize="small" href='tel:00971585052435'>
          <LocalPhoneIcon/> 
        </Link>
      </Box>
      <Box>info@selinacaviar.com</Box>

      <Box>
        <Link color='#fff' fontSize="small" href="mailto:info@selinacaviar.com">
          <EmailIcon/>
        </Link>
      </Box>
      
       </Box>
      </Grid>



      
       
      </Grid>
  );
}

export default Firstheader;