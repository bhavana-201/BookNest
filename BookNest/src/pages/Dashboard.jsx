import React, { useState } from "react";
import AppBar from '@mui/material/AppBar'
import '../styles/Dashboard.css'
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";


function Dashboard(){
  const navItems = ['Add Book', 'Reflections', 'Stats'];
  // const [user, setUser] = useState("Bubby");
  return(
    <>
      <div className="global-container">
        <Box sx={{
          bgcolor : "#0C0B0C",
          width:"95%" ,
          minHeight: "40rem",
          borderRadius: "15px",
        }}>
          <AppBar position="static" sx={{
            borderRadius: "15px"
          }}>
            <Toolbar sx={{  
              bgcolor : "#0C0B0C",
              display:"flex", 
              justifyContent:"space-between",
              borderRadius: "15px"}}>
                <Typography variant="subheading">BookNest</Typography>
                <Box>
                  {navItems.map((item) => (
                    <Button key={item} variant="text" sx={{ marginRight: 5 }}>{item}</Button>
                  ))}
                </Box>
            </Toolbar>
          </AppBar>
          <Divider/>
          <Box>
            <Typography variant="heading" >Welcome bubby!</Typography>
          </Box>
          
        </Box>


      </div>

    </>
  );
}

export default Dashboard;