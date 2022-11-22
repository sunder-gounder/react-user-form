import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Box, Grid, Item,DataGrid } from "@mui/material";

const Header = () => {
  return (
   
    <Box sx={{mx:'auto', width:200}}>
<Grid container direction="column" alignItem="center" justifyContent={'center'} >
  <Grid item xs={3}>

  
  <FaHouseUser /> User Managment System{" "}

              <Link className="nav-link " to="/profile">
                Add New {" "}
              </Link>
              </Grid>
            
              <Link className="nav-link " to="/users">
                Users {" "}
              </Link>

              <Link className="nav-link " to="/">
                Logout{" "}
              </Link>
            
  </Grid>

</Box>

  );
};

export default Header;
