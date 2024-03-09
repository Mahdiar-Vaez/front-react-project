import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CheckContext from "../../utils/CheckOutContext";
export default function CheckOut() {
  const [pay, setPay] = useState("paypal");
  const {TotalPrice}=useContext(CheckContext)
  return (
    
      <Box
        className="back-drop"
        sx={{
          width: "100%",
          display: "flex",
            
          justifyContent: "center",
          height: "max-content",
        }}
      ><div style={{
      
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding:'20px',
            height: "max-content",
          }}  className="back-filter">
        <Paper
          className="card"
          sx={{
            boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
            width: {
                xs:'100%',
                md:'70%'
            },
            height: "600px",
          }}
        >
          <Typography fontWeight={700} variant="h4" component={"p"}>
             
            Choose Your Payment Type

          </Typography>
          <Stack
            sx={{
              display: "flex",
                gap:10,
                flexWrap:'wrap',
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box
              onClick={() => setPay("apple")}
                
              component={"img"}
              sx={{
                width:{
                    xs:'50px',sm:'75px',md:'100px'
                },
                height:{
                    xs:'50px',sm:'75px',md:'100px'
                },
                borderBottom: pay === "apple" && "2px solid rgb(155, 207, 83)",
                cursor: "pointer",
              }}
              src="assets/applepay.png"
            />
            <Box
              onClick={() => setPay("paypal")}
              width={100}
              height={100}
              component={"img"}
              sx={{
                height:{
                    xs:'50px',sm:'75px',md:'100px'
                },
                width:{
                    xs:'50px',sm:'75px',md:'100px'
                },
                borderBottom: pay === "paypal" && "2px solid rgb(155, 207, 83)",
                cursor: "pointer",
              }}
              src="assets/paypal.png"
            />
            <Box
              onClick={() => setPay("google")}
              width={100}
              height={100}
              sx={{
                height:{
                    xs:'50px',sm:'75px',md:'100px'
                },
                width:{
                    xs:'50px',sm:'75px',md:'100px'
                },
                borderBottom: pay === "google" && "2px solid rgb(155, 207, 83)",
                cursor: "pointer",
              }}
              component={"img"}
              src="assets/googlepay.png"
            />
          </Stack>
          <Stack  textAlign={'center'} padding={2}  gap={2}>
           <Typography fontWeight={400}>Total Price : ${TotalPrice}</Typography> 
            <TextField color="success" label="Card Number" />
            <Stack sx={{flexDirection:{xs:'column',md:'row'}}} gap={5} direction={"row"}>
              <TextField
                color="success"
                variant="standard"
                label="Name On Card"
              />
              <TextField color="success" variant="standard" label="Exp Date" />
              <TextField color="success" variant="standard" label="CVC" />
            </Stack>
          </Stack>
          <Button color="success" variant="outlined" ><Link to={'*'}> Proceed Payment</Link></Button>
        </Paper>
         </div>
      </Box>
   
  );
}
