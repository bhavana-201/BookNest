import React, { useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "../styles/Dashboard.css";
import Card from "../components/Card";
import Addbtn from "../components/Addbtn";
import { styled } from "@mui/material/styles";

const StyledSearchBar = styled("input")(({ theme }) => ({
    width: "100%" ,
    maxWidth: "400px",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: theme.palette.background.paper,
    padding: "10px",
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    fontSize: "15px",
    "&::placeholder": {
    color: theme.palette.text.secondary,
    },
    "&:focus": {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
    outline: "none",
    border:"none",

  }));
function Dashboard() {
  const [addBook, setAddbook] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [reflection, setReflection] = useState(false);
  // const [stats, setStats] = useState(false);
  

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      axios.get(`/api/books/search?query=${search}`)
      .then(response => {
        console.log("Search Results:", response.data);
        setSearchResults(response.data);
        setSearch(""); // Clear the search input after submission
        // Handle search results here, e.g., update state to display results
      })
      .catch(error => {
        console.error("Error fetching search results:", error);
      });
    }
  };
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
                <StyledSearchBar id="search-bar" placeholder="Search here..." onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch}/>
                  <Box>
                    <Button variant="text" sx={{ ml: 3 }} onClick={() => setAddbook(true)}>
                      <Typography variant="body1" sx={{ textTransform: "none" }}>
                        Add Book
                      </Typography>
                      
                    </Button>

                    {/* <Button variant="text" sx={{ ml: 3 }} onClick={() => setReflection(true)}>
                      <Typography variant="body1" sx={{ textTransform: "none" }}>
                        Reflections
                      </Typography>
                    </Button>

                    <Button variant="text" sx={{ ml: 3 }} onClick={() => setStats(true)}>
                      <Typography variant="body1" sx={{ textTransform: "none" }}>
                        Stats
                      </Typography>
                    </Button> */}
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
              Welcome!<br/>
            </Typography>
            <Typography variant="body">
                Here's your Shelf
            </Typography>
            
          </Box>
          
              {searchResults.length > 0 ? (
                <Box sx={{ display: "flex",
                    gap: "2rem",
                    backgroundColor:" #141514",
                    maxWidth: "1200px",
                    margin: "auto",//centers it horizontally
                    borderRadius: "10px",
                    padding: "1rem 2rem",
                    border: "2px solid  #292929",
                    flexWrap: "wrap"}}>
                  {searchResults.map((book) => (
                    <Card book={book} key={book.id} />
                  ))}
                  </Box>) : (
                  <Box 
                      sx={{
                        maxWidth: "1200px",
                        px: "0",
                        pt: "2rem",
                        mx: "auto",//centers it horizontally
                      }}>
            <Typography variant="subheading">Currently Reading<br/></Typography>
            {/* <Card /> */}
          
            <Typography variant="subheading">Finished Reading</Typography>
            {/* <Card/> */}
                </Box> )}
        </Box>
      </div>
      {addBook && <Addbtn open={addBook} onClose={() => setAddbook(false)} />}
    </>
  );
}

export default Dashboard;


