import { AppBar, Badge, Box, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import "./style.css";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Navbar() {
  const productNum = useSelector((state) => state.cart.list.length);
  console.log(productNum);
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
                    backgroundColor: "#FFF67E",
                    color: "black",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                  variant="contained"
                  color="success"
                >
                  <ShoppingCartIcon fontSize="small" />
                </Button>
              </Link>{" "}
            </Badge>
            <Link to={"/login-register"}>
              <Button
                sx={{
                  backgroundColor: "#FFF67E",
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
