import { Box, Button, TextField, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useState } from "react";
import "./style.css";
export default function Footer() {
  const [email, setEmail] = useState();
  return (
    <Box
      sx={{
        backgroundColor: "rgb(7, 15, 43) ",
        padding: "20px 10%",
        height: {
      xs:'max-content'},
      }}
      component={"footer"}
    >
      <Box

        sx={{
          gap:'10px',
          display: "flex",
          justifyContent: "space-between",
          flexDirection:{
            xs:'row',
            md:'column'
            
          },
          flexWrap:'wrap',
          height: "max-content",
          backgroundColor: "rgb(7, 15, 43) ",
        }}
      >
          <Typography className="titr">Top Products</Typography>
        <ul>
          <a href="#">
            {" "}
            <li className="list-items">Managed Website</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Manage Reputation</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Power Tools</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Marketing Service</li>{" "}
          </a>
        </ul>
        <Typography className="titr">Quick Links</Typography>
        <ul>
          <a href="#">
            {" "}
            <li className="list-items">Jobs</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Brand Assets</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Investor Relations</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Marketing Service</li>{" "}
          </a>
        </ul>
        <Typography className="titr">Features</Typography>
        <ul>
          <a href="#">
            {" "}
            <li className="list-items">Item 1</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Item 2</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Item 3</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Item 4</li>{" "}
          </a>
        </ul>
        <Typography className="titr">Resources</Typography>
        <ul>
          <a href="#">
            {" "}
            <li className="list-items">Guides</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Experts</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Research</li>{" "}
          </a>
          <a href="#">
            {" "}
            <li className="list-items">Agencies</li>{" "}
          </a>
        </ul>
        <Box 
        sx={{
          width:'100%',
          display:'flex',
          justifyContent:'center'
          ,gap:'20px'
          ,alignItems:'center',
          flexDirection:{
            xs:'column'
          }
        }}>
          <Typography
            color={"white"}
            fontWeight={100}
            fontSize={20}
            fontFamily={"Alegreya"}
          >
            Newsletter
          </Typography>
          <Typography
            variant="body2"
            color={"white"}
            fontSize={17}
            fontFamily={"Alegreya"}
          >
            You can trust us. we only send promo offers,
          </Typography>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            value={email}
            sx={{
              backgroundColor: "white",
              textAlign: "center",
            }}
            label="Enter Your E-mail  "
            color="success"
          />
          <Button
            onClick={() =>{  setEmail('')
              email
                ? alert("Your E-mail Added Successfully ✔ ")
                
                : alert("First Enter Your Email ")}

            }
          
            variant="contained"
            color="success"
          >
            Submit
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection:{
                xs:'row'
              },
              gap: "20px",
            }}
            className="social-media"
          >
            <a
              href="https://wa.me/989056375314"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon color="success" />
            </a>
            <a href="mailto:mahdyarvaez@gmail.com">
              <EmailIcon color="info" />{" "}
            </a>
            <a
              href="https://t.me/MAHDIARVAEZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon color="primary" />
            </a>
            <a
              href="https://www.instagram.com/mahdiarvaez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon color="secondary" />
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
         justifyContent:'center'
        }}
      >
        <Typography
          color={"white"}
          fontFamily={"Alegreya"}
          textAlign={"center"}
         sx={{backgroundColor: "rgb(7, 15, 43) ",width:'100%'}} 
        >
          Copyright 2024 All rights reserved | This is made with 💚 by Mahdiar Vaez| GitHub : https://github.com/Mahdiar-Vaez
          
        </Typography>
      </Box>
    </Box>
  );
}
