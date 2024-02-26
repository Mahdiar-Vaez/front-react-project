import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Box, Button, Typography } from "@mui/material";
import './style.css'
import { addItem, removeAll, removeItem } from "../../redux/slices/CartSlice";

export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  console.log(list)
  const dispatch = useDispatch();  let TotalPrice= 0
  const items = list.map((e, index) => {
  
    TotalPrice+=e?.quantity*e?.attributes?.price
    return (
      <TableRow key={index}>
        <TableCell align="center">{e.id}</TableCell>
        <TableCell align="center">{e?.attributes?.name}</TableCell>
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
          <Button onClick={()=>dispatch(addItem(e))} className="add-remove" color="success">+</Button>
          <Button  onClick={()=>dispatch(removeItem(e.id))} className="add-remove" color="success">-</Button>
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
            <Button variant="contained" color="success" onClick={()=>dispatch(removeAll())}>Remove All From Your Cart</Button>
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
      <Typography variant="h3"  textAlign={"center"}>Your cart is empty</Typography>
      </Box>
    )}
      
    </Box>
   
  );
}
