import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Drawer,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  useMediaQuery,
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
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import fetchApi from "../../utils/fetchApi";
import shortText from "../../utils/ShortText";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";
import { toast } from "react-toastify";
import Toast from "../Toast/Toast";
export default function Navbar() {
  const [searchInp, setSearchInp] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [drawer, setDrawer] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  window.addEventListener("click", (e) => {
    if (!e?.target.closest(".search-container")) {
      setSearchInp("");
    }
  });
  const productNum = useSelector((state) => state.cart.list.length);
  useEffect(() => {
    if (searchInp) {
      (async () => {
        try {
          const res = await fetchApi(
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
      <Card
          sx={{ width: "25%", marginTop: "5px", marginBottom:'20px',height:{
          xs:'20vh',
          md:'150px',
          lg:'200px '
        }  }}
        key={index}
      >
        <Link
          to={`/product-details/${e?.id}/${e?.attributes?.name
            .split(" ")
            .join("-")}`}
        >
          <CardActionArea sx={{
            height:'100%'
          }} onClick={() => setSearchInp("")}>
            <CardMedia
              component={"img"}
              sx={{
                width:{
                  xs:'100%'
                }
                ,height:{xs:'10vh',md:'75px',
              lg:'100px'
              },
              objectFit:'contain'
              }}
              src={
                process.env.REACT_APP_BASE_URL +
                e?.attributes?.image?.data[0]?.attributes?.url
              }
            />
            <CardContent>
              <Typography textAlign={'center'}  sx={{
                fontSize:{
                 xs:'10px',
                 sx:'12px',
                 md:'16px',
                 lg:'	18px',
                },
                fontWeight:{
                  xs:500,
                  lg:500
                }
              }} variant="h6">
                {shortText(e?.attributes?.name, 20)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    );
  });
  return (
    <>
      <Stack
        sx={{
          position:'fixed',
          top:"1px",
          backgroundColor:'white',
          boxShadow:'0 0 20px 0',
          width:'100%',
          zIndex:100,
          display: {
            xs: "flex",
            lg: "none",
          },
          padding: "20px 10%",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        {" "}
        <Box component={"img"} src="./assets/logo.png.webp" />{" "}
        <Tooltip title={"Open Menu"}>
          <Button
            sx={{
              textAlign: "center",
            }}
            onClick={() => setDrawer(true)}
          >
            {" "}
            <MenuIcon fontSize="large" color="success" />
          </Button>
        </Tooltip>
        <TextField
          sx={{
            fontFamily: "Alegreya",
            fontWeight: 700,
            width: "150px",
          }}
          onChange={(e) => setSearchInp(e.target.value)}
          color="success"
          value={searchInp}
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
                borderRadius:"20px",
                padding: "20px",
                position: "absolute",
                zIndex:10,
                right: "50%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                flexWrap: "wrap",
                width: "80vw",
                transform: "translateX(50%)",
                height: "700px",
                overflow: "auto",
                gap: "20px",
                visibility: searchInp ? "visible" : "hidden",
                opacity: searchInp ? "1" : "0",
                marginTop: "60px",
                backgroundColor: "rgba(191, 234, 124,.9)",
              }}
            >
              {searchResult.length > 0 ? (
                searchResultItems
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography color={"black"} variant="h3" fontWeight={900}>
                    Product Not found
                  </Typography>
                </Box>
              )}
            </Box>
      </Stack>

      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <Stack sx={{height:'90vh'}} padding={2} width={200} gap={3} alignItems={"center"} justifyContent={'space-between'} direction={"column"}>
          {" "}
          <Badge color="success" badgeContent={productNum}>
            <Link to={"/cart"}>
              <Button
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: 700,
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
          <Link to={"/"}>
            {" "}
            <Button
              sx={{
                fontFamily: "Alegreya",
                fontWeight: 700,
              }}
              startIcon={<HomeIcon />}
              color="success"
              variant="text"
            >
              Home
            </Button>
          </Link>
          <Link to={"/blog"}>
            {" "}
            <Button
              sx={{
                fontFamily: "Alegreya",
                fontWeight: 700,
              }}
              color="success"
              startIcon={<MenuBookIcon />}
              variant="text"
            >
              Blog
            </Button>
          </Link>
          <Link to={"/products/categories/0/all-categories"}>
            {" "}
            <Button
              sx={{
                fontFamily: "Alegreya",
                fontWeight: 700,
              }}
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
              sx={{
                fontFamily: "Alegreya",
                fontWeight: 700,
              }}
              startIcon={<CategoryIcon />}
              color="success"
              variant="text"
            >
              Categories
            </Button>
          </Link>
          {!token ? (
            <Link to={"/login-register"}>
              <Button
                sx={{
                  fontFamily: "Alegreya",
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
          ) : (
            <Button
              onClick={() => {
                toast.success("Logout Successfully");
                dispatch(logout());
              }}
              color="error"
              variant="contained"
            >
              Logout
            </Button>
          )}
        </Stack>
        <Toast />
      </Drawer>
      <AppBar
        sx={{
          backgroundColor: "white",
          padding: "5px  10%",
          height: 78,
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <Toolbar
          sx={{
            fontFamily: "Alegreya",
            alignItems: "center",

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box component={"img"} src="./assets/logo.png.webp" />
          <Stack gap={2} alignItems={"center"} direction={"row"}>
            <Link to={"/"}>
              {" "}
              <Button
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: 700,
                }}
                startIcon={<HomeIcon />}
                color="success"
                variant="text"
              >
                Home
              </Button>
            </Link>
            <Link to={"/blog"}>
              {" "}
              <Button
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: 700,
                }}
                color="success"
                startIcon={<MenuBookIcon />}
                variant="text"
              >
                Blog
              </Button>
            </Link>
            <Link to={"/products/categories/0/all-categories"}>
              {" "}
              <Button
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: 700,
                }}
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
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: 700,
                }}
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
                    fontFamily: "Alegreya",
                    fontWeight: 700,
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
              sx={{
                fontFamily: "Alegreya",
                fontWeight: 700,
                width: "150px",
              }}
              onChange={(e) => setSearchInp(e.target.value)}
              color="success"
              value={searchInp}
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
                padding: "20px",
                position: "absolute",
                right: "50%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                flexWrap: "wrap",
                width: "1000px",
                transform: "translateX(50%)",
                height: "600px",
                overflow: "auto",
                gap: "20px",
                visibility: searchInp ? "visible" : "hidden",
                opacity: searchInp ? "1" : "0",
                marginTop: "60px",
                backgroundColor: "rgba(191, 234, 124,.9)",
              }}
            >
              {searchResult.length > 0 ? (
                searchResultItems
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography color={"black"} variant="h3" fontWeight={900}>
                    Product Not found
                  </Typography>
                </Box>
              )}
            </Box>
            {!token ? (
              <Link to={"/login-register"}>
                <Button
                  sx={{
                    fontFamily: "Alegreya",
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
            ) : (
              <Button
                onClick={() => {
                  toast.success("Logout Successfully");
                  dispatch(logout());
                }}
                color="error"
                variant="contained"
              >
                Logout
              </Button>
            )}
            <Toast />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
