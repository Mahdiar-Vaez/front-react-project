import { Box } from '@mui/material'
import React from 'react'

export default function PageNotFound() {
  return (
    <Box sx={{
      padding:'20px 10%',
      width:'100%',
      height:"85vh"
    }}>
      <Box component={'img'} sx={{width:'100% !important',height:'80vh',objectFit:'contain'}} src='assets/404.webp'/>
      </Box>
  )
}
