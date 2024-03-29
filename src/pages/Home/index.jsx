import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { Box, Button, Paper, Typography } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ShieldIcon from "@mui/icons-material/Shield";
import DiscountIcon from "@mui/icons-material/Discount";
import fetchApi from "../../utils/fetchApi";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const DiscountSlider = () => {
  const shortText = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
  };
  const [discount, setDiscount] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi(
          "products?populate=*&filters[discount][$gt]=0"
        );
        setDiscount(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const Items = discount?.map((e, index) => {
    return (
      <SwiperSlide
        key={index}
        className="swiper-sliders"
        style={{
          textAlign: "center",
          borderRadius: "20px",
          fontsize: "18px",
          background: "#fff",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          height: 400,
        }}
      >
        <Box
          sx={{
            objectFit: "contain",
            width: "100%",
          }}
          component={"img"}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt={e?.attributes?.name}
        />

        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
            },
          }}
        >
          {shortText(e?.attributes?.name, 10)}
        </Typography>
        <del> ${e?.attributes?.price} </del>
        <Typography component={"p"} variant="body2">
          ${e?.attributes?.price * ((100 - e?.attributes?.discount) / 100)}
        </Typography>
        <Link
          to={`product-details/${e?.id}/${e?.attributes?.name
            .split(" ")
            .join("-")}`}
        >
          {" "}
          <Button
            sx={{
              width: {
                xs: "50px",
                sm: "75px",
              },
            }}
            color="success"
            variant="contained"
          >
            More Info
          </Button>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      style={{
        width: "100%",
        height: "85%",
        display: "flex",
        alignItems: "center",
      }}
      slidesPerView={"auto"}
      autoplay={true}
      spaceBetween={20}
      modules={[Autoplay]}
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
        padding: "0 10%",
      }}
    >
      <Slider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "20px",
        }}
      >
        <Paper
          component={motion.div}
          initial={{ opacity: 0, visibility: "hidden", scale: 0 }}
          whileInView={{ opacity: 1, visibility: "visible", scale: 1 }}
          transition={{ duration: 0.5 }}
          className="paper"
          sx={{
            width: {
              xs: "100%",
              md: "45%",
              lg: "20%",
            },

            height: {
              xs: 75,
              md: 100,
            },
            textAlign: "center",
          }}
        >
          <SavingsIcon color="success" fontSize="medium" />
          <Typography
            fontFamily={"Alegreya"}
            fontWeight={600}
            fontSize={14}
            variant="h6"
          >
            MONEY BACK GUARANTEE
          </Typography>
          <Typography
            color={"grey"}
            fontFamily={"Alegreya"}
            fontSize={15}
            variant="body1"
          >
            {" "}
            Shall open divide a one
          </Typography>
        </Paper>
        <Paper
          component={motion.div}
          initial={{ opacity: 0, visibility: "hidden", scale: 0 }}
          whileInView={{ opacity: 1, visibility: "visible", scale: 1 }}
          transition={{ duration: 0.5 }}
          className="paper"
          sx={{
            width: {
              xs: "100%",
              md: "45%",
              lg: "20%",
            },

            height: {
              xs: 75,
              md: 100,
            },
            textAlign: "center",
          }}
        >
          <LocalShippingIcon color="success" fontSize="medium" />
          <Typography
            fontFamily={"Alegreya"}
            fontWeight={600}
            fontSize={14}
            variant="h6"
          >
            FREE DELIVEY
          </Typography>
          <Typography
            color={"grey"}
            fontFamily={"Alegreya"}
            fontSize={15}
            variant="body1"
          >
            {" "}
            Shall open divide a one
          </Typography>
        </Paper>
        <Paper
          component={motion.div}
          initial={{ opacity: 0, visibility: "hidden", scale: 0 }}
          whileInView={{ opacity: 1, visibility: "visible", scale: 1 }}
          transition={{ duration: 0.5 }}
          className="paper"
          sx={{
            width: {
              xs: "100%",
              md: "45%",
              lg: "20%",
            },

            height: {
              xs: 75,
              md: 100,
            },
            textAlign: "center",
          }}
        >
          <HeadphonesIcon color="success" fontSize="medium" />
          <Typography
            fontFamily={"Alegreya"}
            fontWeight={600}
            fontSize={14}
            variant="h6"
          >
            ALWAYS SUPPORT
          </Typography>
          <Typography
            color={"grey"}
            fontFamily={"Alegreya"}
            fontSize={15}
            variant="body1"
          >
            {" "}
            Shall open divide a one
          </Typography>
        </Paper>
        <Paper
          component={motion.div}
          initial={{ opacity: 0, visibility: "hidden", scale: 0 }}
          whileInView={{ opacity: 1, visibility: "visible", scale: 1 }}
          transition={{ duration: 0.5 }}
          className="paper"
          sx={{
            width: {
              xs: "100%",
              md: "45%",
              lg: "20%",
            },

            height: {
              xs: 75,
              md: 100,
            },
            textAlign: "center",
          }}
        >
          <ShieldIcon color="success" fontSize="medium" />
          <Typography
            fontFamily={"Alegreya"}
            fontWeight={600}
            fontSize={14}
            variant="h6"
          >
            SECURE PAYMENT
          </Typography>
          <Typography
            color={"grey"}
            fontFamily={"Alegreya"}
            fontSize={15}
            variant="body1"
          >
            Shall open divide a one
          </Typography>
        </Paper>
      </Box>
      <Typography
        component={motion.div}
        initial={{ opacity:0,scale:0 }}
        whileInView={{ opacity:1,scale:1 }}
        transition={{ duration:.3 }}
        sx={{
          letterSpacing: 2,
          fontSize: {
            xs: "15px",
            sx: "17px",
            md: "19px",
            lg: "21px",
          },
        }}
        my={5}
        fontWeight={900}
        textAlign={"center"}
        fontFamily={"Alegreya"}
        variant="h4"
        color={"#416D19"}
      >
        <DiscountIcon fontSize="small" /> Discover Our biggest Discount{" "}
        <DiscountIcon fontSize="small" />
      </Typography>
      <Box
        component={motion.div}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: "100%",
          height: {
            xs: "40vh",
            sm: "55vh",
            md: "60vh",
            lg: "65vh",
          },
          backgroundColor: "rgba(79,191,38,.4)",
          borderRadius: "20px",
          marginTop: "25px",
          display: "flex",
          padding: "10px",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DiscountSlider />
        <Typography
          component={motion.div}
          initial={{ opacity:0,scale:0 }}
          whileInView={{ opacity:1,scale:1 }}
          transition={{ duration:.5 }}
          sx={{
            fontSize: {
              xs: "15px",
              sx: "17px",
              md: "19px",
              lg: "21px",
            },
          }}
          textAlign={"center"}
          fontWeight={500}
          fontSize={20}
          fontFamily={"Alegreya"}
        >
          These products are available for limited time only. Don't miss out on
          this amazing offer!
        </Typography>
      </Box>
      <Box
        component={motion.div}
        initial={{ opacity: 0, visibility: "hidden", scale: 0 }}
        whileInView={{ opacity: 1, visibility: "visible", scale: 1 }}
        transition={{ duration: 0.5 }}
        className="main-men"
        sx={{
          borderRadius: 10,
          width: "100%",
          marginTop: "40px",

          height: {
            xs: "200px",
            sm: "400px",
            md: "450px",
            lg: "500px",
          },
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "100%",
            gap: "20px",
            backgroundColor: "rgba(0, 0, 0,.6)",
            alignItems: "center",
            height: "100%",
            color: "white",
          }}
        >
          {" "}
          <Typography
            textAlign={"center"}
            fontWeight={700}
            fontFamily={"Alegreya"}
            variant="h3"
            sx={{
              fontSize: {
                xs: "25px",
                sm: "27px",
                md: "29px",
                lg: "35px",
              },
            }}
          >
            ALL{" "}
            <span
              style={{
                color: "#9BCF53",
              }}
            >
              MEN’S
            </span>{" "}
            COLLECTION
          </Typography>
          <Typography
            textAlign={"center"}
            fontWeight={800}
            sx={{
              fontSize: {
                xs: "25px",
                sm: "27px",
                md: 29,
                lg: 50,
              },
            }}
            variant="h3"
          >
            Up To 10%
          </Typography>
          <Link to={"/products/categories/3/MEN"}>
            <Button
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: 17,
                  lg: 20,
                },
              }}
              variant="contained"
              color="success"
            >
              Discover Now
            </Button>
          </Link>
        </Box>
      </Box>
      <Box className="blog-titr">
        {" "}
        <Typography
          fontSize={20}
          fontFamily={"Alegreya"}
          fontWeight={900}
          
        >
          LATEST BLOG
        </Typography>
        <Typography textAlign={'center'}
         component={motion.p}
         initial={{ opacity:0,scale:0 }}
         whileInView={{ opacity:1,scale:1 }}
         transition={{ duration:.5 }}
        fontFamily={"Alegreya"} fontSize={17}>
          Bring called seed first of third give itself now ment
        </Typography>
      </Box>

      <Box
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-between !important",
        }}
        className="blog-container"
      >
        <Box
          sx={{ width: { xs: "100% !important" }, height: 450 }}
          className="blog-box"
        >
          <Box component={"img"} src="./assets/b1.jpg.webp" />
          <Box>
            <Typography
              fontFamily={"Alegreya"}
              textAlign={"center"}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                  lg: 20,
                },
              }}
              fontWeight={800}
            >
              How to choose the best clothes
            </Typography>
            <Typography
              textAlign={"center"}
              fontFamily={"Alegreya"}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                  lg: 20,
                },
              }}
              variant="body2"
            >
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </Typography>
          </Box>{" "}
          <Button
            sx={{
              fontSize: {
                xs: 12,
                sm: 14,
                md: 16,
                lg: 18,
              },
            }}
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            color="success"
          >
            Learn More
          </Button>
        </Box>
        <Box sx={{ width: { xs: "100% !important" } }} className="blog-box">
          <Box component={"img"} src="./assets/b2.jpg.webp" />
          <Box>
            <Typography
              fontFamily={"Alegreya"}
              textAlign={"center"}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                  lg: 20,
                },
              }}
              fontWeight={800}
            >
              How to choose the best clothes
            </Typography>
            <Typography
              textAlign={"center"}
              fontFamily={"Alegreya"}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                  lg: 20,
                },
              }}
              variant="body2"
            >
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </Typography>
          </Box>{" "}
          <Button
            sx={{
              fontSize: {
                xs: 14,
                sm: 16,
                md: 18,
                lg: 20,
              },
            }}
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            color="success"
          >
            Learn More
          </Button>
        </Box>
        <Box sx={{ width: { xs: "100% !important" } }} className="blog-box">
          <Box component={"img"} src="./assets/b3.jpg.webp" />
          <Box>
            <Typography
              fontFamily={"Alegreya"}
              textAlign={"center"}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                  lg: 20,
                },
              }}
              fontWeight={800}
            >
              How to choose the best clothes
            </Typography>
            <Typography
              textAlign={"center"}
              fontFamily={"Alegreya"}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  md: 18,
                  lg: 20,
                },
              }}
              variant="body2"
            >
              Let one fifth i bring fly to divided face for bearing the divide
              unto seed winged divided light Forth.
            </Typography>
          </Box>{" "}
          <Button
            sx={{
              fontSize: {
                xs: 14,
                sm: 16,
                md: 18,
                lg: 17,
              },
            }}
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            color="success"
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
