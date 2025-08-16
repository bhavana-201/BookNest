import dotenv from 'dotenv';    
import express from 'express';
import { Router } from 'express';
import axios from 'axios';
dotenv.config(); // Load environment variables from .env file

//Creates a mini-router instance.
const searchRoutes = Router();

// Define your search routes here

//this / handles GET requests to the search endpoint
searchRoutes.get('/', async (req, res) => {
    //1. get the search query from the frontend request
    const query = req.query.query;
    //or i can use const {query} = req.query;

    if(!query){
        return res.status(400).json({
            message : 'Search query is required.'
        });
    }
    try{
        const externalApiUrl = process.env.googleAPI + 'volumes';
        const params = {
            q: query,
            maxResults: 10,
        };
        const response = await axios.get(externalApiUrl, {params});
        const books = response.data.items || [];
        const formattedBooks = books.map( (item) =>({
            id :item.id,
            title : item.volumeInfo.title,
            author : item.volumeInfo.authors,
            coverImg : item.volumeInfo.imageLinks?.thumbnail || '',
            description : item.volumeInfo.description || 'No description available',
        }))
        console.log('Search Results:', formattedBooks);
        return res.status(200).json(formattedBooks);
    }
    catch(error){
        console.error('Error fetching search results:', error);
        return res.status(500).json({
            message: 'Error fetching search results',
            error: error.message
        });
    }
    
});

export default searchRoutes;
