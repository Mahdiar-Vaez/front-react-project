import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { addItem } from "../../redux/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import fetchApi from "../../utils/fetchApi";
export default function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const id = useParams().id;
  const quantity = useSelector((state) => state.cart.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
  console.log(quantity);
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchApi(`products/${id}?populate=*`);
        setProduct(response?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const imgItems = product?.attributes?.image?.data?.map((e, index) => {
    return (
      <SwiperSlide className="product-details-slider" key={index}>
        <Box
          component={"img"}
          src={process.env.REACT_APP_BASE_URL + e?.attributes?.url}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Box
        sx={{
          padding: "10px 5%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#BFEA7C",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Stack
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {product?.attributes?.image?.data.length > 1 ? (
            <Swiper
              style={{
                "--swiper-pagination-color": "#416D19", // Change the color of the pagination bullets
                "--swiper-navigation-color": "#ff0000", // Change the color of the navigation buttons
              }}
              pagination={true}
              modules={[Pagination]}
            >
              {imgItems}
            </Swiper>
          ) : (
            <Swiper>
              <SwiperSlide className="product-details-slider">
                <Box
                  component={"img"}
                  src={
                    process.env.REACT_APP_BASE_URL +
                    product?.attributes?.image?.data[0].attributes?.url
                  }
                />
              </SwiperSlide>
            </Swiper>
          )}
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={5}
        >
          <Typography textAlign={'center'} variant="h5" fontFamily={'Alegreya'} fontWeight={800}>
            {product?.attributes?.name}
          </Typography>
          <Typography sx={{fontSize:'20px !important'}} textAlign={'center'} fontFamily={'Alegreya'}  variant="body2">
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
            <Typography fontSize={20} fontWeight={900} variant="body2">
              $
              {product?.attributes?.price *
                ((100 - product?.attributes?.discount) / 100)}
            </Typography>
          ) : (
            ""
          )}
          <Tooltip title={"Add to Cart"} placement="top">
            <Button
              onClick={() => dispatch(addItem(product))}
              sx={{
                width: "75px",
                height: "50px",
                textAlign: "center",
              }}
              size="small"
              color="success"
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
              first
            />
          </Tooltip>
          <Typography>
            {quantity ? quantity + " of this product Added To Your Cart" : ""}
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
