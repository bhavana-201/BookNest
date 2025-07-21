import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        mode : 'dark',
        background : {
            default : "#0C0B0C",
        },
        text: {
            primary : "#ffffffff",
            secondary : "#CCCCCC",

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
    }


})

export default theme;