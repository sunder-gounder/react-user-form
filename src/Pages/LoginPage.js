import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid,Paper, TextField, Button } from '@mui/material'


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  
  const btnstyle={margin:'8px 0'}
  
 //admin value
  const userName = "admin@admin.com";
  const userPassword = "admin";
  
  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR password");
    }
  };
  return (
    <>
      <Grid>
     
      <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                   
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter username'  
                value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"fullWidth required/>
                
                
                <TextField label='Password' placeholder='Enter password' type='password'
               
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1" fullWidth required/>
                
              <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>Login</Button>
               
            </Paper>
      </Grid>
    </>
  );
};

export default LoginPage;
