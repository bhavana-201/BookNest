
function Dashboard(){
  const navItems = ['Add Book', 'Reflections', 'Stats'];
  return(
    <>
      <div className="global-container">
        <Box 
            sx={{
            bgcolor : "#0C0B0C",
            width:"95%" ,
            minHeight: "40rem",
            borderRadius: "15px",
            paddingX : "4rem",
          }}>
          <Box sx={{
            maxWidth:"1200px",
            margin: "0 auto",
          }}>
            <AppBar position="static">
              <Toolbar  disableGutters sx={{backgroundColor : "#0C0B0C"}}>
                  <Box sx={{
                    width: "100%",
                    maxWidth :"1200px",
                    display :'flex',
                    paddingX : "0",
                    justifyContent:"space-between",
                    alignItems: "center",
                  }}>
                      <Typography variant="subheading">BookNest</Typography>
                      <Box>
                        {navItems.map((item) => (
                          <Button key={item} variant="text" sx={{ marginRight: 5 }}>{item}</Button>
                        ))}
                      </Box>
                  </Box>
                </Toolbar>  
            </AppBar>
            <Divider  />
            <Typography variant="heading" >Welcome bubby!</Typography>
          </Box>
        </Box>
      </div>

    </>
  );
}

export default Dashboard;
