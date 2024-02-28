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
      <SwiperSlide key={index}>
        <Box className="img-swiper"
          sx={{
            position: "relative",
          }}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt={e?.attributes?.title}
          component={"img"}
        />
        <Box
          sx={{
         
            position: "absolute",
            width: "inherit",
            backgroundColor:'rgba(0, 0, 0,.4)',
            height:'inherit',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography fontFamily={"fantasy"} color={"white"} variant="h3">
            {e?.attributes?.title}
          </Typography>
          <Button  variant="contained" color="success">
            View More
          </Button>
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
