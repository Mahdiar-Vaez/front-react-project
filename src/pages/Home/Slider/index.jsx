import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import fetchApi from "../../../utils/fetchApi";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Slider() {
  const [slider, setSlider] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi("sliders?populate=*");
        setSlider(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const sliderItems = slider?.map((e, index) => {
    return (
      <SwiperSlide className="img-swiper" key={index}>
        <Box 
          
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt={e?.attributes?.title}
          component={motion.img}
          initial={{opacity:0,visibility:'hidden',scale:0}}
          whileInView={{opacity:1,visibility:'visible',scale:1}}
          sx={{
            width:'100%',
            height:'100%'
          }}
      
        />
        <Box
          sx={{
            
            position: "absolute",
            width: "inherit",
            height: "inherit",
            backgroundColor:'rgba(0,0,0,.5)',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            component={"h2"}
            fontFamily={"Alegraya"}
            color={"white"}
            variant="h3"
      
            fontWeight={700}
          >
            {e?.attributes?.title}
          </Typography>
          <Link to={"/category"}>
            {" "}
            <Button variant="contained" color="success">
              View More
            </Button>
          </Link>
        </Box>
      </SwiperSlide>
    );
  });
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Box
        sx={{
          padding: "5px 5%",
        }}
      >
        {" "}
        <Swiper
          style={{
            "--swiper-pagination-color": "#416D19", // Change the color of the pagination bullets
            "--swiper-navigation-color": "#BFEA7C", // Change the color of the navigation buttons

            position: "relative",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {sliderItems}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </Box>
    </>
  );
}
