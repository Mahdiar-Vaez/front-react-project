import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Box } from "@mui/material";
import './style.css'

export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();  let TotalPrice= 1
  const items = list.map((e, index) => {
  
    TotalPrice+=e?.quantity*e.attributes.price
    return (
      <TableRow key={index}>
        <TableCell align="center">{index}</TableCell>
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
        <TableCell align="center">{e?.attributes?.price * ((100-e?.attributes?.discount)/100 )*e.quantity}</TableCell>

      </TableRow>

    );
    
  });
  return (
    <TableContainer sx={{
      padding:'10px 5%'
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{
          backgroundColor:"#BFEA7C"
        }}>
          <TableRow>
            <TableCell className="table-headers" align="center">Row</TableCell>
            <TableCell className="table-headers" align="center">Name</TableCell>
            <TableCell className="table-headers" align="center">Image</TableCell>
            <TableCell className="table-headers" align="center">Real Price</TableCell>
            <TableCell className="table-headers" align="center">Discount (%)</TableCell>
            <TableCell className="table-headers" align="center">Discounted Price</TableCell>
            <TableCell className="table-headers" align="center">Quantity</TableCell>
            <TableCell className="table-headers" align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
