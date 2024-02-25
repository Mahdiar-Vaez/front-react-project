import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import fetchApi from "../../utils/fetchApi";
export default function ProductDetails() {
  const id = useParams().id;
  const [product, setProduct] = useState();
  const [images,setImages]=useState()
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchApi(`products/${id}?populate=*`);
        setProduct(response?.data);
      
       
      } catch (error) {
        console.log(error);
      }
    })();
    
  }, [id])
  const imgItems= product?.attributes?.image?.data?.map((e,index)=>{
    return(
      
     <SwiperSlide key={index}>
      <Box component={'img'} src={process.env.REACT_APP_BASE_URL+e?.attributes?.url} />
     </SwiperSlide>
    )
  })
  
  return (
  
    <>
      <Box
        sx={{
          padding: "10px 5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Stack sx={{
          width:'50%',
          display:'flex',
          alignItems:'center'
        }}>
          {product?.attributes?.image?.data.length>1 ?
          (
            <Swiper 
            style={{
              '--swiper-pagination-color': '#416D19', // Change the color of the pagination bullets
              '--swiper-navigation-color': '#ff0000' // Change the color of the navigation buttons
            }}
            pagination={true} modules={[Pagination]}>
              {imgItems}
            </Swiper>
          ):(    <Box
            sx={{
              width: "400px",
              height: "60vh",
              objectFit:'contain !important'
            }}
            component={"img"}
            src={
              process.env.REACT_APP_BASE_URL +
              product?.attributes?.image?.data[0]?.attributes?.url
            }
          
          />
        
        )
        }
       
          
      
        
            
      
        </Stack>
        <Stack sx={{
          width:'50%'
        }} gap={5}>
          <Typography  variant="h5" fontWeight={800}>
            {product?.attributes?.name}
          </Typography>
          <Typography variant="body2">
            {product?.attributes?.description}
          </Typography>
          {product?.attributes?.discount > 0 ? (
            <del
              variant="body2"
              style={{
                fontSize: "20px",
              }}
            >
              ${product?.attributes?.price}
            </del>
          ) : (
            <Typography fontSize={15}>
              {" "}
              ${product?.attributes?.price}
            </Typography>
          )}
          {product?.attributes?.discount > 0 ? (
            <Typography fontSize={20} variant="body2">
              $
              {product?.attributes?.price *
                ((100 - product?.attributes?.discount) / 100)}
            </Typography>
          ) : (
            ""
          )}
          <Tooltip title={'Add to Cart'} placement='top'>
          <Button sx={{
            width:'100px',
            height:"50px",
            textAlign:'center'
          }}  size="small" color="success" startIcon={<AddShoppingCartIcon/>} variant="contained" first/>
          </Tooltip>
        </Stack>
      </Box>
    </>
  );
}
