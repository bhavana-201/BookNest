import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // This is how you load .env variables
dotenv.config();
import authRoutes from './routes/auth.js'; // This assumes routes/auth.js exports a router
import searchRoutes from './routes/searchRoute.js'; // Importing the search routes
const app = express();

const PORT = process.env.PORT || 5000; // Use process.env.PORT


app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);// routes defined in routes/auth.js
app.use('/api/books/search', searchRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to BookNest Backend!');
});

app.listen(PORT, () => console.log(`🟢 Backend running on http://localhost:${PORT}`));

