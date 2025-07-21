import React from "react";
import AppBar from '@mui/material/AppBar'
import '../styles/Dashboard.css'
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";

function Dashboard(){
  return(
    <>
      <div className="global-container">
        <Box sx={{
          bgcolor : "#0C0B0C",
          width:"95%" ,
          minHeight: "40rem",
          borderRadius: "15px"
        }}>
          <AppBar position="static">
           <Toolbar>
              <Typography>BookNest</Typography>
           </Toolbar>
          </AppBar>
        </Box>

      </div>
    </>
  );
}

export default Dashboard;