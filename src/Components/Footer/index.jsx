import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './style.css'
export default function Footer() {
  const [email,setEmail]=useState()
  return (
    <Box sx={{
      backgroundColor:'rgb(7, 15, 43) ',
      padding:'20px 10%',
      height:'350px'
    }} component={'footer'}>
      <Box sx={{
        display:'flex'
        ,justifyContent:'space-between',
        
        height:'250px',
        backgroundColor:'rgb(7, 15, 43) '
      }}>
        <ul>
          <li className='titr'>Top Products</li> 
          <a href='#'> <li className="list-items">Managed Website</li> </a>
          <a href='#'> <li className="list-items">Manage Reputation</li> </a>
          <a href='#'> <li className="list-items">Power Tools</li> </a>
          <a href='#'> <li className="list-items">Marketing Service</li> </a>
        </ul>
        <ul>
         <li className='titr'>Quick Links</li> 
          <a href='#'> <li className="list-items">Jobs</li> </a>
          <a href='#'> <li className="list-items">Brand Assets</li> </a>
          <a href='#'> <li className="list-items">Investor Relations</li> </a>
          <a href='#'> <li className="list-items">Marketing Service</li> </a>
        </ul>
        <ul>
           <li className='titr'>Features</li>
          <a href='#'> <li className="list-items">Item 1</li> </a>
          <a href='#'> <li className="list-items">Item 2</li> </a>
          <a href='#'> <li className="list-items">Item 3</li> </a>
          <a href='#'> <li className="list-items">Item 4</li> </a>
        </ul>
        <ul>
           <li className='titr'>Resources</li> 
          <a href='#'> <li className="list-items">Guides</li> </a>
          <a href='#'> <li className="list-items">Experts</li> </a>
          <a href='#'> <li className="list-items">Research</li> </a>
          <a href='#'> <li className="list-items">Agencies</li> </a>
        </ul>
        <ul>
          <Typography color={'white'} fontWeight={100} fontSize={20} fontFamily={'Alegreya'}>
          Newsletter
          </Typography>
          <Typography variant='body2' color={'white'} fontSize={17}  fontFamily={'Alegreya'}>
          You can trust us. we only send   promo offers,
          </Typography> 
          <TextField onChange={(e)=>setEmail(e.target.value)}  variant='standard'  sx={{
            backgroundColor:'white',
            textAlign:'center'
            
          }} label='Enter Your E-mail  ' color='success'/>
          <Button onClick={()=>email?alert('Your E-mail Added Successfully ✔ '):alert('First Enter Your Email ')} variant='contained' color='success'>
            Submit 
          </Button>

        </ul>
      </Box>
      <Box sx={{
        display:'flex'
        ,marginTop:'20px',
        marginBottom:5
      }}>
        
        <Typography color={'white'} fontFamily={'Alegreya'} textAlign={'center'} variant=''>
        Copyright 2024 All rights reserved | This is made with 💚 by Mahdiar Vaez
        </Typography>
      </Box>
    </Box>
  )
}
