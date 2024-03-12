import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchApi from "../../utils/fetchApi";
import { Link } from "react-router-dom";
export function CategoriesCart({ id, name, image }) {

  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:{
          xs:'column',
          md:'row'
        },
        width: {
          xs:'100%',
          md:600
        },
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
          objectFit:'cover',
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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const categoriesItems = category?.map((e, index) => {
 
    return (
      <Box    key={index} sx={{
        display:'flex',
        width:'100%',
        flexDirection:{
          xs:'column',
          md:'row'
        },
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
          <Stack direction={"column"} gap={'10px'}  alignItems={'center'} justifyContent={'center'} sx={{
            padding:'20px',
            width:{
              xs:'100%',
              md:'40%'
            },
            borderRadius:'20px',
            backgroundColor:'rgb(191, 234, 124)'
          }}> <Typography textAlign={"center"}  fontSize={16} fontWeight={300} variant="body2">
          {e?.attributes?.description}
        
        </Typography><Link  to={`/products/categories/${e?.id}/${e?.attributes?.name}`}><Button   variant="contained"  color="success" >View More</Button></Link>  
        </Stack>
       
      </Box>
    );
  });
  return (
    <>
    {category?    <Stack
        sx={{
          padding: "5px 5%",
          height: "max-content",
          
        }}
        direction={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {categoriesItems}
      </Stack>:
      <Stack         sx={{
        padding: "5px 5%",
        height: "750px",
        backgroundColor: "rgba(191, 234, 124)",
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Typography fontWeight={600}>Check Your Internet Connection </Typography>
      </Stack>
      }
  
    </>
  );
}
