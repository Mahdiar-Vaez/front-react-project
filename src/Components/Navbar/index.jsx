import {
  AppBar,
  Badge,
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import fetchApi from "../../utils/fetchApi";
import shortText from "../../utils/ShortText";
export default function Navbar() {
  const [searchInp, setSearchInp] = useState();
  const [searchResult, setSearchResult] = useState([]);
  window.addEventListener('click',(e)=>{
    if(!e?.target.closest('.search-container' )
    )
  {
    setSearchInp('')
    
   
    
  }
  })
  const productNum = useSelector((state) => state.cart.list.length);
  useEffect(() => {
    if (searchInp) {
      (async () => {
        try {
          const res =await fetchApi(
            `products?populate=*&filters[name][$containsi]=${searchInp}`
          );
          setSearchResult(res?.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [searchInp]);
  const searchResultItems = searchResult?.map((e, index) => {
    return (
    
      <Card  sx={{ width:'20%',
      marginTop:"5px",
      height:'200px'}} key={index}>
          <Link to={`/product-details/${e?.id}/${e?.attributes?.name.split(' ').join('-')}`}>
        <CardActionArea onClick={()=>setSearchInp('')} >
          <CardMedia
            component={"img"}
            width={50}
            height={100}
            src={
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.image?.data[0]?.attributes?.url
            }
          />
          <CardContent>
            <Typography
              
              fontWeight={900}
              fontSize={"15px"}
              variant="h6"
            >
              {shortText(e?.attributes?.name,40)}          
            </Typography>
          </CardContent>
        </CardActionArea></Link>
      </Card>
      
    );
  });
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          padding: "5px  5%",
          height: 78,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box component={"img"} src="./assets/logo.png.webp" />
          <Stack gap={2} direction={"row"}>
            <Link to={"/"}>
              {" "}
              <Button startIcon={<HomeIcon />} color="success" variant="text">
                Home
              </Button>
            </Link>
            <Link to={"/contact"}>
              {" "}
              <Button
                color="success"
                startIcon={<PermContactCalendarIcon />}
                variant="text"
              >
                Contact
              </Button>
            </Link>
            <Link to={"/products/categories/0/all-categories"}>
              {" "}
              <Button
                color="success"
                startIcon={<InventoryIcon />}
                variant="text"
              >
                Products
              </Button>
            </Link>
            <Link to={"/category"}>
              {" "}
              <Button
                startIcon={<CategoryIcon />}
                color="success"
                variant="text"
              >
                Categories
              </Button>
            </Link>
          </Stack>
          <Stack gap={2} direction={"row"}>
            <Badge color="success" badgeContent={productNum}>
              <Link to={"/cart"}>
                <Button
                  sx={{
                    backgroundColor: "#BFEA7C",
                    color: "black",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                  variant="contained"
                  color="success"
                >
                  <ShoppingCartIcon fontSize="medium" />
                </Button>
              </Link>
            </Badge>

            <TextField
              onChange={(e) => setSearchInp(e.target.value)}
              color="success"
              value={searchInp}
              sx={{
                width: "150px",
              }}
              size="small"
              label="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              className="search-container"
              sx={{
                padding:'20px',
                position: "absolute",
                right: "50%",
                display:'flex',
                justifyContent:'space-around',
                alignItems:'start',
                flexWrap:'wrap',
                width: "1000px",
                transform: "translateX(50%)",
                height: "600px",
                overflow:'auto',
                gap:'20px',
                visibility: searchInp ? "visible" : "hidden",
                opacity: searchInp ? "1" : "0",
                marginTop: "60px",
                backgroundColor: "rgba(191, 234, 124,.9)",
              }}
            >
              
              {
               
              searchResult.length>0?searchResultItems:
              <Box sx={{
                width:'100%',
                height:'400px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <Typography color={"black"} variant="h3" fontWeight={900}>
                    Product Not found 
                    </Typography>
                    </Box>
              }
          
            </Box>

            <Link to={"/login-register"}>
              <Button
                sx={{
                  backgroundColor: "#BFEA7C",
                  color: "black",
                  "&:hover": {
                    color: "white",
                  },
                }}
                variant="contained"
                color="success"
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
