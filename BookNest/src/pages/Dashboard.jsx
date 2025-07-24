import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "../styles/Dashboard.css";

function Dashboard() {
  const navItems = ["Add Book", "Reflections", "Stats"];

  return (
    <>
      <div className="global-container">
        <Box
          sx={{
            bgcolor: "#0C0B0C",
            width: "95%",
            minHeight: "40rem",
            borderRadius: "15px",
            mx: "auto",//l
            my: 4,//l
          }}
        >
          {/* AppBar Section */}
          <AppBar
            position="static"
            sx={{
              borderRadius: "15px",
              backgroundColor: "#0C0B0C",
              boxShadow: "none",
            }}
          >
            <Toolbar disableGutters sx={{backgroundColor : "#0C0B0C", borderRadius : "15px"}}>
              <Box
                sx={{
                  maxWidth: "1200px",
                  px: "0",//l
                  width: "100%",
                  mx: "auto",//l
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subheading">
                  BookNest
                </Typography>
                <Box>  
                  {/* only for nav buttons */}
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      variant="text"
                      sx={{ marginLeft: 3 }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Full-width Divider */}
          <Divider/>

          {/* Main Content */}
          <Box
            sx={{
              maxWidth: "1200px",
              px: "0",
              pt: "2rem",
              mx: "auto",//centers it horizontally
            }}
          >
            <Typography variant="heading">
              Welcome back, Bubby!<br/>
            </Typography>
            <Typography variant="body">
                Here's your Shelf
              </Typography>
            
          </Box>
          <Box 
          sx={{
              maxWidth: "1200px",
              px: "0",
              pt: "2rem",
              mx: "auto",//centers it horizontally
            }}>
            <Typography variant="subheading">Currently Reading<br/></Typography>
            {/* <Card/> */}
            
            <Typography variant="subheading">Finished Reading</Typography>
            {/* <Card/> */}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
