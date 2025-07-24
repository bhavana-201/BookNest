import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        mode : 'dark',
        background : {
            default : "#0C0B0C",
        },
        text: {
            primary : "#ffffffff",
            secondary : "#976b24ff",

        },
        primary : {
            main : "#D67D3E",
            dark : "#98511eff"
        },
        error: {
            main: '#EF5350',
            },
        warning: {
            main: '#FF9800',
        },
        info: {
            main: '#2196F3',
        },
        success: {
            main: '#FF9800',
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
                    fontFamily : "Inter",
                    fontSize : "1rem",
                    color:"white",
                    textTransform : "none",
                    border : "4px",
                }
                
            }

        },
        MuiTypography : {
            variants : [
                {
                    props : { variant : 'heading' },
                    style : {
                        fontFamily : 'Playfair Display',
                        fontSize : "4rem",
                        color: "#ffffffff",
                    }

                },
                {
                    props : { variant : 'subheading' },
                    style : {
                        fontFamily : 'Playfair Display',
                        fontSize : "2rem",
                        color: "#ffffffff",
                    }

                },
                {
                    props : { variant : 'body' },
                    style : {
                        fontFamily : 'Inter',
                        fontSize : "1.5rem",
                        color: "#a7a093ff",
                    }

                }
        ],},
        
    }
})

export default theme;