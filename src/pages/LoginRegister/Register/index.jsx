import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from 'axios'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../Login/style.css";
import { InputAdornment, Tooltip } from "@mui/material";
import useFormFields from "../../../utils/UseFormFields";
import { toast } from "react-toastify";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        MR.VAEZ
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function Register({ handlePageType }) {
  const [pass,setPass]=useState(true)

  const [image,setImage]=useState()
  const [fields,handleFields]=useFormFields()
  const handleSubmit=(e)=>{
    e.preventDefault()

    axios
    .post(process.env.REACT_APP_BASE_API+'auth/local/register',fields)
    .then(()=>{
      handlePageType()
      toast.success('Registered successfully')
    }).catch(
      err=>{
       
        toast.error(err?.response?.data?.error?.message)}
    )
    
  }
  return (
    <div className="back-image">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "700px",
          backgroundColor: "rgba(155, 207, 83,.3)",
        }}
      >
        <Container
          sx={{
            borderRadius: "20px",
            backgroundColor: "rgb(255,255,255)",
          }}
          component="main"
          maxWidth="xs"
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Tooltip title={"add photo"} placement="top">
              <Avatar
                sx={{ m: 1, bgcolor: "success", cursor: "pointer" }}
              >
                 <input
 style={{
  opacity:'0',
  height:100,
  cursor:'pointer'
 }}
    type='file'
    accept='image/*'
    onChange={(event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    }}
  />
  {image ? <img src={image} alt="Profile" /> : ''}
              </Avatar>
            </Tooltip>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="username"
                    name="username"
                    onChange={handleFields}
                    required
                    fullWidth
                    color="success"
                    id="username"
                    label="username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    onChange={handleFields}
                    id="email"
                    color="success"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    onChange={handleFields}
                    name="password"
                    color="success"
                    label="Password"
                    type={pass?'password':"text"}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment  position="start">
                         { pass?< VisibilityOffIcon sx={{cursor:'pointer'}} onClick={()=>setPass(!pass)}  />:
                         <VisibilityIcon sx={{cursor:'pointer'}} onClick={()=>setPass(!pass)}/>
                         }
                        </InputAdornment>
                      ),}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="success" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Typography
                component={"p"}
                onClick={handlePageType}
                sx={{
                  cursor: "pointer",
                }}
                textAlign={"center"}
                href="#"
                variant="body2"
              >
                Do you have account
              </Typography>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </div>
  );
}
