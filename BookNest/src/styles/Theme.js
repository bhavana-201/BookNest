import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        mode : 'dark',
        background : {
            default : "#0C0B0C",
        },
        text: {
            primary : "#ffffffff",
            secondary : "#DCD4C7",

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
                        color: theme => theme.palette.text.secondary,
                    }

                },
                {
                    props : { variant : 'subheading' },
                    style : {
                        fontFamily : 'Playfair Display',
                        fontSize : "2rem",
                        color: theme => theme.palette.text.primary,
                    }

                },
                {
                    props : { variant : 'body' },
                    style : {
                        fontFamily : 'Inter',
                        fontSize : "99rem",
                        color: theme => theme.palette.text.secondary,
                    }

                }
        ],

        },

    }


})

export default theme;