import React from 'react'
import Slider from './Slider'
import { Box, Paper, Typography } from '@mui/material'
import SavingsIcon from '@mui/icons-material/Savings';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ShieldIcon from '@mui/icons-material/Shield';

export default function Home() {
  return (
    <Box sx={{
      padding:'0 5%'
    }}>
      <Slider/>
      <Box sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
      }}>
        <Paper className='paper' sx={{
          width:'20%',
          height:'100px',
          textAlign:'center',
          
        }}>
        <SavingsIcon fontSize='medium' />
        <Typography fontWeight={600} fontSize={14} variant='h6'>MONEY BACK GUARANTEE</Typography>
        <Typography color={'grey'} fontSize={10}  variant='body2'>Shall open divide a one</Typography>
        </Paper>
        <Paper className='paper' sx={{
          width:'20%',
          height:'100px',
          textAlign:'center'
        }}>
        <LocalShippingIcon fontSize='medium' />
        <Typography fontWeight={600} fontSize={14}  variant='h6'>FREE DELIVEY</Typography>
        <Typography color={'grey'} fontSize={10} variant='body1'>Shall open divide a one</Typography>
        </Paper>
        <Paper className='paper' sx={{
          width:'20%',
          height:'100px',
          textAlign:'center'
        }}>
        <HeadphonesIcon fontSize='medium' />
        <Typography fontWeight={600} fontSize={14}  variant='h6'>ALWAYS SUPPORT</Typography>
        <Typography color={'grey'} fontSize={10} variant='body1'>Shall open divide a one</Typography>
        </Paper>
        <Paper className='paper' sx={{
          width:'20%',
          height:'100px',
          textAlign:'center'
        }}>
        <ShieldIcon fontSize='medium' />
        <Typography fontWeight={600} fontSize={14}  variant='h6'>SECURE PAYMENT</Typography>
        <Typography color={'grey'} fontSize={10} variant='body1'>Shall open divide a one</Typography>
        </Paper>
        
      </Box>
    </Box>
  )
}
