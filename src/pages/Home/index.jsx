import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { Box, Button,  Paper, Typography } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ShieldIcon from "@mui/icons-material/Shield";
import fetchApi from "../../utils/fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
export const DiscountSlider = () => {
  const shortText=(str,maxLength)=>{
    return(str.length>maxLength)?
    str.slice(0,maxLength-1)+'...':str
  }
  const [discount, setDiscount] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi(
          "products?populate=*&filters[discount][$gt]=0"
        );
        setDiscount(res.data);
        console.log(discount);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const Items = discount?.map((e, index) => {

   
    
  
    return (
      <SwiperSlide
        style={{
          textAlign: "center",
          fontsize: "18px",
          background: "#fff",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:10,
          height: 500,
        }}
      >
        <Box
          sx={{
            objectFit: "cover",
            width: "100%",
            height:400
            
          }}
          component={"img"}
          key={index}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt=""
        />

        {console.log(e?.attributes?.image?.data?.attributes?.url)}
        <Typography variant="body2" fontSize={15}>
          {(shortText(e?.attributes?.name,30))}
        </Typography>
        <del> ${e?.attributes?.price} </del>
        <Typography variant="body2">
          ${e?.attributes?.price * ((100 - e?.attributes?.discount) / 100)}
        </Typography>
        <Link to={`product-details/${e?.id}/${e?.attributes?.name.split(' ').join('-')}`}>  <Button color="success" variant="contained">
          More Info
        </Button></Link>
      
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      style={{
        width: "100%",
        height: "85%",
      }}
      slidesPerView={4}
      autoplay={true}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {Items}
    </Swiper>
  );
};
export default function Home() {
  return (
    <Box
      sx={{
        padding: "0 5%",
      }}
    >
      <Slider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Paper
          className="paper"
          sx={{
            width: "20%",
            height: "100px",
            textAlign: "center",
          }}
        >
          <SavingsIcon color="success" fontSize="medium" />
          <Typography fontWeight={600} fontSize={14} variant="h6">
            MONEY BACK GUARANTEE
          </Typography>
          <Typography color={"grey"} fontSize={10} variant="body2">
            Shall open divide a one
          </Typography>
        </Paper>
        <Paper
          className="paper"
          sx={{
            width: "20%",
            height: "100px",
            textAlign: "center",
          }}
        >
          <LocalShippingIcon color="success" fontSize="medium" />
          <Typography fontWeight={600} fontSize={14} variant="h6">
            FREE DELIVEY
          </Typography>
          <Typography color={"grey"} fontSize={10} variant="body1">
            Shall open divide a one
          </Typography>
        </Paper>
        <Paper
          className="paper"
          sx={{
            width: "20%",
            height: "100px",
            textAlign: "center",
          }}
        >
          <HeadphonesIcon color="success" fontSize="medium" />
          <Typography fontWeight={600} fontSize={14} variant="h6">
            ALWAYS SUPPORT
          </Typography>
          <Typography color={"grey"} fontSize={10} variant="body1">
            Shall open divide a one
          </Typography>
        </Paper>
        <Paper
          className="paper"
          sx={{
            width: "20%",
            height: "100px",
            textAlign: "center",
          }}
        >
          <ShieldIcon color="success" fontSize="medium" />
          <Typography fontWeight={600} fontSize={14} variant="h6">
            SECURE PAYMENT
          </Typography>
          <Typography color={"grey"} fontSize={10} variant="body1">
            Shall open divide a one
          </Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "700px",
          backgroundColor: "rgba(18,18,18,.2)",
          borderRadius: "20px",
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DiscountSlider />
      </Box>
    </Box>
  );
}
