import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar() {
  return (
    <>
     <AppBar sx={{
      backgroundColor:'white',
      padding:'5px  5%'
     }}>
      <Toolbar sx={{
        display:'flex',
        justifyContent:'space-between',
      }}>
        <Box component={'img'} src="./assets/logo.png.webp"  />
        <Stack gap={2} direction={'row'}>
          <Button color="success" variant="text"><Link to={'/'}>Home</Link></Button>
          <Button color="success" variant="text"><Link to={'/contact'}>Contact</Link></Button>
          <Button color="success" variant="text"><Link to={'/'}>Products</Link></Button>
          <Button color="success" variant="text"><Link to={'/category'}>Categories</Link></Button>
        </Stack>
        <Stack gap={2} direction={'row'}>
          <Button variant="contained" color="success"><ShoppingCartIcon fontSize="small"/></Button>
          <Button variant="contained" color="success">Login</Button>
          
        </Stack>

      </Toolbar>

     </AppBar>
      
    </>
  );
}
