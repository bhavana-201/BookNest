import React from "react";
import '../styles/Card.css';
import Typography from "@mui/material/Typography";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';


function Card( {book}) {
    return (
        <Box className="cards">
                <Box className="book-card">
                    <Box className="book-info">
                        <img src={book.coverImg} alt={book.title} width='50px' />
                        <Box className="book-details">
                            <Typography variant="book-name">{book.title}</Typography>
                            <Typography variant="body">{book.author}</Typography>
                            <a href="#" className="book-description" >Read More...</a>
                        </Box>
                    </Box>
                    <Box className="button">
                        <Button
                            variant='text'
                            startIcon={<ControlPointIcon sx={{ color: '#7a7aff' }} />}
                            size="large"
                        >
                            Reflect
                        </Button>
                    </Box>
                </Box>
        </Box>
    );
}

export default Card;
