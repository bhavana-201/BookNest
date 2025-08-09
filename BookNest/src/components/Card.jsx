import React from "react";
import '../styles/Card.css';
import Typography from "@mui/material/Typography";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { sampleBooks } from "../utils/bookData.js";

function Card() {
    return (
        <Box className="cards">
            {sampleBooks.map((book, index) => (
                <Box key={index} className="book-card">
                    <Box className="book-info">
                        <img src={book.img} alt={book.title} width='50px' />
                        <Box className="book-details">
                            <Typography variant="book-name">{book.title}</Typography>
                            <Typography variant="body">{book.author}</Typography>
                        </Box>
                    </Box>
                    <Box className="button">
                        <Button
                            variant='text'
                            startIcon={<ControlPointIcon sx={{ color: '#D67D3E' }} />}
                            size="large"
                        >
                            Reflect
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Card;
