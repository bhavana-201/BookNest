import React from "react";
import '../styles/Card.css'
import Typography from "@mui/material/Typography";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { currentlyReading } from "../utils/bookData.js";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box'

function Card(){
    const book = currentlyReading[0];
    return(
        <>
            <Box className="cards">
                <Box className="book-info">
                    <img src={book.img} width='50px' />
                    <Box className="book-details">
                        <Typography variant='book-name'>{book.name}</Typography>
                        <Typography variant='body'>{book.author}</Typography>
                    </Box>
                </Box>
                <Box className="button">
                    <Button variant='text' startIcon={ <ControlPointIcon sx={{ color: '#D67D3E' }} />} size="large">
                            
                        Reflect
                    </Button>
                </Box>
            </Box>

        </>

    );
}
export default Card;

