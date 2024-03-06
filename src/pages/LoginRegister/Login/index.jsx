import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/AuthSlice";
import axios from "axios";
import useFormFields from "../../../utils/UseFormFields";
import { toast } from "react-toastify";
import { InputAdornment } from "@mui/material";
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
      <Link color="inherit" href="https://mui.com/">
        MR.VAEZ
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login({ handlePageType }) {
  const dispatch = useDispatch();
  const [pass,setPass]=useState(true)
  const [fields, handleFields] = useFormFields();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_API + "auth/local", fields)
      .then((Response) => {
        dispatch(login({ user: Response.data.user, token: Response.data.jwt }));
        toast.success("Login Successfully");
      })
      .catch(() => toast.error('Wrong User Name Or Pass'));
  };

  return (
    <div className="back-image">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "700px",
          backdropFilter:' blur(5px) saturate(200%)',
    webkitBackdropFilter: 'blur(5px) saturate(200%)',
    backgroundColor: 'rgba(17, 25, 40, 0.52)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)'
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
            <Avatar sx={{ m: 1, bgcolor: "success" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              onSubmit={handleSubmit}
              component="form"
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleFields}
                    autoComplete="Email"
                    name="identifier"
                    required
                    fullWidth
                    color="success"
                    id="firstName"
                    label="Email or Username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={handleFields}
                    fullWidth
                    name="password"
                    color="success"
                    label="Password"
                    type={pass?"password":'text'}
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
                Don't you have an account ?
              </Typography>
              
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </div>
  );
}
