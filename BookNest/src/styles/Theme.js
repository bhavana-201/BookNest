import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000", // var(--background-color)
        paper: "#1d1d1f", // var(--card-background)
      },
      text: {
        primary: "#ffffff", // var(--primary-color)
        secondary: "#999999", // var(--secondary-color)
      },
      primary: {
        main: "#7a7aff", // var(--accent-color)
        dark: "#6a6aff",
      },
      error: {
        main: "#EF5350",
      },
      warning: {
        main: "#FF9800",
      },
      info: {
        main: "#2196F3",
      },
      success: {
        main: "#4caf50",
    },
  },
    components : {
        MuiButton : {
            defaultProps:{
                variant : "contained",
                color : "primary",//for btn bg
                size : "small",
            },
            styleOverrides : {
                root : {
                    fontFamily: "'Roboto', sans-serif",
                    fontSize : "1rem",
                    borderRadius: "50px",
                    padding: "0.75rem 1.5rem",
                    color:"white",
                    textTransform : "none",
                    border : "4px",
                    transition: "background-color 0.3s ease, transform 0.3s ease",
          
                }
                
            }

        },
        MuiTypography : {
          fontFamily: "'Roboto', sans-serif",
            variants : [
                {
                    props : { variant : 'heading' },
                    style : {
                        fontFamily : "'Playfair Display', serif",
                        fontSize : "4rem",
                        fontWeight: "700",
                        color: "#ffffffff",
                    }

                },
                {
                    props : { variant : 'subheading' },
                    style : {
                        fontFamily : "'Playfair Display', serif",
                        fontSize : "1.5rem",
                        fontWeight: "700",
                        color: "#ffffffff",
                    }

                },
                {
                    props : { variant : 'book-name' },
                    style : {
                        fontFamily : 'Playfair Display',
                        fontSize : "1.5rem",
                        color: "#ffffffff",
                    }

                },
                
                {
                    props : { variant : 'body' },
                    style : {
                        fontSize : "1rem",
                        color: "#999999",
                    }

                }
        ],},
        
    }
})

export default theme;




