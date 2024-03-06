import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {  useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import './style.css'
import { addItem, removeAll, removeItem } from "../../redux/slices/CartSlice";
import shortText from "../../utils/ShortText";
import { useContext } from "react";
import CheckContext from "../../utils/CheckOutContext";

export default function Cart() {
  const {price,handlePrice}=useContext(CheckContext)
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();  
  let TotalPrice= 0
  const items = list.map((e, index) => {
  
    TotalPrice+=e?.quantity*e?.attributes?.price
      
    return (
      <TableRow key={index}>
        <TableCell align="center">{e.id}</TableCell>
        <TableCell align="center">{shortText(e?.attributes?.name,20)}</TableCell>
        <TableCell align="center">
          <Box
            src={process.env.REACT_APP_BASE_URL+e?.attributes?.image?.data[0]?.attributes?.url}
            width={50}
            height={50}
            component={"img"}
            alt={e?.attributes?.name}
          />
        </TableCell>
        <TableCell align="center">{e?.attributes?.price}</TableCell>
        <TableCell align="center">{e?.attributes?.discount}</TableCell>
        <TableCell align="center">{e?.attributes?.price * ((100-e?.attributes?.discount)/100 )}</TableCell>
        <TableCell align="center">{e?.quantity}</TableCell>
        <TableCell align="center">
          <Button sx={{height:{xs:'30px',md:'45px'} ,fontSize:{xs:'14px',md:'16px'}}}  onClick={()=>dispatch(addItem(e))} className="add-remove" color="success">Add</Button>
          <Button sx={{height:{xs:'30px',md:'45px'} ,fontSize:{xs:'14px',md:'16px'}}} onClick={()=>dispatch(removeItem(e.id))} className="add-remove" color="error">Remove</Button>
        </TableCell>
        <TableCell align="center">{e?.attributes?.price * ((100-e?.attributes?.discount)/100 )*e.quantity}</TableCell>

      </TableRow>

    );
    
  });
  return (
    <Box sx={{
      padding:'10px 5%',
      minHeight:'80vh',
      backgroundColor:'#9BCF53',
      display:"flex",
      justifyContent:"center",
      alignItems:'start'
      
    }}>
      {list.length>0? <TableContainer >
      <Table  sx={{ minWidth: 650,backgroundColor:'white' }} aria-label="caption table">
        <TableHead sx={{
          backgroundColor:"#BFEA7C",
          borderRadius:"20px"
        }}>
          <TableRow>
            <TableCell className="table-headers" align="center">ID</TableCell>
            <TableCell className="table-headers" align="center">Name</TableCell>
            <TableCell className="table-headers" align="center">Image</TableCell>
            <TableCell className="table-headers" align="center">Real Price</TableCell>
            <TableCell className="table-headers" align="center">Discount (%)</TableCell>
            <TableCell className="table-headers" align="center">Discounted Price</TableCell>
            <TableCell className="table-headers" align="center">Quantity</TableCell>
            <TableCell className="table-headers" align="center">Add/Remove</TableCell>
            <TableCell className="table-headers" align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items}
        </TableBody>
        <TableRow>
          <TableCell>
            Total Price : $<b>{TotalPrice}</b>
          </TableCell>
          <TableCell>
            <Button sx={{height:{xs:'30px',md:'45px'} ,fontSize:{xs:'10px',md:'15px'}}} variant="contained" color="error" onClick={()=>dispatch(removeAll())}>Remove All </Button>
          </TableCell>
          <TableCell>
            <Button  sx={{height:{xs:'30px',md:'45px'} ,fontSize:{xs:'10px',md:'15px'}}}  variant="outlined" color="warning">Check Out</Button>
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>:(
      <Box sx={{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Typography className="empty" fontFamily={'alegreya'} variant="h3"  textAlign={"center"}>Your cart is empty</Typography>
      </Box>
    )}
  
      
    </Box>
   
  );
}
