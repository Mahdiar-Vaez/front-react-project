import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import './style.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Slider from "@mui/material/Slider";
import { Button, Drawer, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import fetchApi from "../../utils/fetchApi";
import shortText from "../../utils/ShortText";
export function MediaCard({ image, name, price, discount,id }) {
  return (
    <Card sx={{ height:500 ,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  
    justifyContent:'space-between'
     }}>
      <CardMedia className="img-holder" component={'img'}  sx={{ height:'350px',
      width:300, objectFit:"cover"}} 
       image={image} />
      <CardContent sx={{
        height:'20%'
      }}>
        <Typography sx={{
          width:'200px'
        }} gutterBottom variant="body2" fontSize={15} component="div">
          { shortText(name,40)}
        </Typography>
        <Typography>
          {discount>0?<del>${price}</del>:<Typography variant="body1">${price}</Typography>}
        </Typography>
        <Typography>{discount>0?  `$${price * ((100 - discount) / 100)}`: ""}</Typography>
      </CardContent>
      <CardActions>
      <Link to={`/product-details/${id}/${name.split(' ').join('-')}`}>    <Button size="small" variant="contained" color="success">More Info</Button></Link>
      </CardActions>
    </Card>
  );
}
export default function Products() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = React.useState([0, 500]);
  const [isDrawerOpen, setDrawer] = useState(false);
  const [sort, setSort] = useState("createdAt:asc");
  const handleSort = (e) => {
    const { target } = e;
    setSort(target.value);
  };
  const handleClick = () => {
    setDrawer(true);
  };
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const categoryId = useParams().id;

  useEffect(() => {
    (async () => {
      try {
        const res =await fetchApi(
          `products?populate=*&${
            categoryId !== '0' && `filters[categories][id][$eq]=${categoryId}`
          }&filters[price][$gt]=${price[0]}&filters[price][$lte]=${
            price[1]
          }&sort=${sort}`
         
        );
        setProducts(res.data);
        console.log(products)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId, sort, price]);
  const productsItems = products?.map((e, index) => {
    
    return (
      <MediaCard
        key={index}
        id={e?.id}
        price={e?.attributes?.price}
        discount={e?.attributes?.discount}
        name={e?.attributes?.name}
        image={
          process.env.REACT_APP_BASE_URL +
          e?.attributes?.image?.data[0]?.attributes?.url
        }
      />
    );
  });
  return (
    <>
      <Button
        sx={{
          top: "80px",
          right: "50%",
          transform:'translateX(50%)',
          position: "fixed",
          backgroundColor:'#9BCF53',
          zIndex:1
                     
        }}
        variant="contained"
        color="success"
        onClick={handleClick}
      >
        Filters and Sort
      </Button>
      <Box
        
        sx={{
          marginTop:1,
          width: "100%",
          padding: "10px 5%",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "row",
          flexWrap:'wrap',
          gap:'20px',
          backgroundColor:'#FFF67E',
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Drawer
          anchor="top"
          sx={{}}
          onClose={() => setDrawer(false)}
          open={isDrawerOpen}
        >
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",

              height: 200,
            }}
          >
            <Box sx={{ width: "70%" }}>
              <Typography>Price Range</Typography>
              <Slider
                color="success"
                getAriaLabel={() => "price range"}
                value={price}
                min={0}
                max={1000}
                step={5}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={() => `$ ${price}`}
              />
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  size="small"
                  id="demo-simple-select-label"
                  sx={{}}
                  color="success"
                  variant="outlined"
                >
                  Sort
                </InputLabel>
                <Select
                  color="success"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Age"
                  onChange={handleSort}
                >
                  <MenuItem value={"price:desc"}>Highest Price</MenuItem>
                  <MenuItem value={"price:asc"}>Lowest Price</MenuItem>
                  <MenuItem value={"createdAt:desc"}>Oldest</MenuItem>
                  <MenuItem value={"createdAt:asc"}>Newest</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button onClick={() => setDrawer(false)} color="success">
              Close
            </Button>
          </Box>
        </Drawer>
        {products.length>0?<>{productsItems}</>:<Box sx={{
          width:'100%',
          height:'90vh'
        }}>
          <Typography variant="h5">Items Not Found</Typography>
          </Box>}
      </Box>
    </>
  );
}
