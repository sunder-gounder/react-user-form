
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import Header from "../Components/Header";

import { Grid, Paper, TextField, Button, Box  } from '@mui/material'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
 import FormLabel from '@mui/material/FormLabel';
//  import PhoneInput from 'react-phone-input-2'


const HomePage = () => {
  
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [gender, setgender] = useState("");
  
  
  // useEffect (() => {

  //   const name = JSON.parse(localStorage.getItem('name'));
  //   if (name)
  //   {
  //     setname(name);
  //   }
  // }, []);


  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const headerStyle = { margin: 0 }
  const marginTop = { marginTop: 5 }
  
  //  bloodgroup = [
  //   {
  //     value: 'A+',
  //     label: 'A+',
  //   },
  //   {
  //     value: 'B+',
  //     label: 'B+',
  //   },
  //   {
  //     value: 'O+',
  //     label: 'O+',
  //   },
  
  // ];
  

  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    //show data in json format
    alert(JSON.stringify([ name,lastname,email,userpassword,gender] ));

    if (name === "") {
      toast.error("Name Is Required");
    } else if (email === "") {
      toast.error("Email Is Required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("last_name", lastname);
      localStorage.setItem("email", email);
     
      localStorage.setItem("password", userpassword);
      localStorage.setItem("gender", gender);
    
      toast.success("User Saved!");


      localStorage.getItem("name", name);
      localStorage.getItem("last_name", lastname);
      localStorage.getItem("email", email);
     
      localStorage.getItem("password", userpassword);
      localStorage.getItem("gender", gender);
    
    }
    
  


  };

  return (
    <>
      <Header />
     
         <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                   
                    <h2 style={headerStyle}>Add Users</h2>
                    
                </Grid>
                <form>
                <Box sx={{ p: 1 }}></Box>
                    <TextField fullWidth label='Name' placeholder="Enter your name" 
                    type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                id="exampleInputName" />
               <Box sx={{ p: 1 }}></Box>
                
                    <TextField fullWidth label='Email' placeholder="Enter your email"
                    type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1" />
                   <Box sx={{ p: 1 }}></Box>
                     <TextField fullWidth label='Last Name' placeholder="Enter your Last Name" 
                    type="text"
                      
                      value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                className="form-control"
                id="exampleInputName"/>
                <Box sx={{ p: 1 }}></Box>

                    <FormControl component="fieldset" style={marginTop}>

                        <FormLabel component="legend">Gender</FormLabel>

                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="Female" control={<Radio />} label="Female"
                            defaultChecked={gender === "Female"}
                  onClick={(e) => setgender(e.target.value)}
                  id="flexRadioDefault2" />
                           
                            <FormControlLabel  control={<Radio />} label="Male" value="Male"
                  defaultChecked={gender === "Male"}
                  onClick={(e) => setgender(e.target.value)}
                  id="flexRadioDefault1" />

                            <FormControlLabel  control={<Radio />} label="Other"  
                              value="Other"
                  defaultChecked={gender === "Other"}
                  onClick={(e) => setgender(e.target.value)}
                  id="flexRadioDefault3"

                  />
                        </RadioGroup>
                    </FormControl>
                    <Box sx={{ p: 1 }}></Box>
        {/* </TextField> */}
                    {/* <TextField  fieldtype= "number" fullWidth label='Phone Number' placeholder="Enter your phone number" 
                      value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="form-control"
                id="exampleInputPhone"
                    /> */}

                    {/* <PhoneInput
            specialLabel={''}
            country={'th'}
            inputStyle={{
              borderColor: (props.touched && props.error) && "red"
            }}
            {...props}
            /> */}
                    <TextField fullWidth label='Password' placeholder="Enter your password"
                      type="password"
                value={userpassword}
                onChange={(e) => setuserpassword(e.target.value)}
                className="form-control"
                    />
                    <Box sx={{ p: 1 }}></Box>
                  
                    <Button type='submit' variant='contained' color='primary' 
              className="form__submit-btn" onClick={handleSubmit} >Submit</Button>
                </form>
            </Paper>
        </Grid>

         
    </>
  );
};

export default HomePage;
