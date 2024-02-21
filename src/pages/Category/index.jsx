import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchApi from "../../utils/fetchApi";
import { Link } from "react-router-dom";
export function CategoriesCart({ id, name, image }) {
  {
    console.log(image);
  }
  return (
    <Box
      sx={{
        width: 600,
        height: 400,
        transition: "all .4s ",
        position: "relative",
        "&:hover img": {
          filter: "blur(2px)",
        },
        "&:hover div": {
          opacity: 1,
          visibility: "visible",

          transform: "scale(1)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",

          transition: "all .4s ",
        }}
        component={"img"}
        src={image}
        alt={name}
      />

      <Box
        variant="text"
        sx={{
          width: "100%",

          position: "absolute",
          backgroundColor: "rgba(65, 109, 25,.6)",
          height: "50%",
          left: "0%",
          top: "50%",
          textAlign: "center",
          transition: "all .4s ",
          opacity: 0,
          borderRadius: "20px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          visibility: "hidden",
          transform: "scale(0)",
          overflow: "hidden",
        }}
      >
        <Link to={`/products/categories/${id}/${name}`}> 
        <Button
          variant="outlined"
          color="success"
          sx={{
            color: "white",
          }}
        >
           View More {name} Category
        
        </Button>
        </Link>
      </Box>
      <Box></Box>
    </Box>
  );
}
export default function Category() {
  const [category, setCategory] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi("categories?populate=*");
        setCategory(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const categoriesItems = category?.map((e, index) => {
    {
      console.log(
        process.env.REACT_APP_BASE_URL + e?.attributes?.image?.data?.image
      );
    }
    return (
      <Box    key={index} sx={{
        display:'flex',
        width:'100%',
        justifyContent:'space-evenly',
      }}>
        <CategoriesCart
       
          id={e?.id}
          name={e?.attributes?.name}
          image={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
        />
          <Stack direction={"column"} alignItems={'center'} justifyContent={'space-evenly'} sx={{
            padding:'20px',
            width:'40%',
            borderRadius:'20px',
            backgroundColor:'#bfba7c'
          }}> <Typography textAlign={"center"} fontSize={16} fontWeight={300} variant="body2">
          {e?.attributes?.description}
        
        </Typography><Link  to={`/product-details/${e?.id}/${e?.attributes?.name}`}><Button   variant="contained"  color="success" >View More</Button></Link>  
        </Stack>
       
      </Box>
    );
  });
  return (
    <>
      <Stack
        sx={{
          padding: "5px 5%",
          height: "max-content",
          backgroundColor: "rgb(255, 246, 126)",
        }}
        direction={"column"}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {categoriesItems}
      </Stack>
    </>
  );
}
