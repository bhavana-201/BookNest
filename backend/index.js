// import express from 'express';
// import cors from 'cors';
// import './.env'
// import auth from './routes/auth.js'

// const app = express();
// const PORT = 5000;
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(express.json());

// const client = new OAuth2Client(CLIENT_ID);// Initializes the Google OAuth client

// app.post('/api/auth/google', auth.js);

// app.listen(PORT, () => console.log(`🟢 Backend running on http://localhost:${PORT}`));

// index.js

// 1. Core Libraries and Tools:
//    - Need the web framework: express
//    - Need cross-origin communication handling: cors
//    - Need to load environment variables (like secrets and configurations): dotenv
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // This is how you load .env variables

// 2. Load Environment Variables First:
//    - Before anything else, tell dotenv to load everything from your .env file
dotenv.config();

// 3. Import Your Custom Route Managers:
//    - Get the "Authentication Manager" from its dedicated file.
//    - Later, you'll add similar imports for 'books.js' and 'userBooks.js'.
import authRoutes from './routes/auth.js'; // This assumes routes/auth.js exports a router

// 4. Initialize the Express Application:
//    - Create the main server instance.
const app = express();

// 5. Define the Port:
//    - Get the port from your .env file, or use a default if it's not set.
const PORT = process.env.PORT || 5000; // Use process.env.PORT

// 6. Connect to the Database (Placeholder for now):
//    - You'll add this when you set up your database connection.
// import connectDB from './config/db.js';
// connectDB(); // Call the function to establish connection

// 7. Apply Global Middleware:
//    - Rules that apply to all incoming requests.
//    - CORS: Tell the browser it's okay for your frontend to talk to this backend.
//      - Use process.env.FRONTEND_URL for the origin, not hardcoded if possible.
//    - JSON Body Parser: Allows your Express app to understand JSON data sent in requests.
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// 8. Mount Your Route Managers:
//    - Tell Express: "For any URL starting with '/api/auth', pass it to my 'authRoutes' manager."
//    - This means the actual Google Auth POST endpoint will be defined *inside* authRoutes.js
//      as just '/google' (because its base path is already set here to '/api/auth').
app.use('/api/auth', authRoutes);

// 9. Simple Root Route (Optional, for testing server uptime):
//    - A basic message to show your server is running if you visit the root URL.
app.get('/', (req, res) => {
    res.send('Welcome to BookNest Backend!');
});

// 10. Start the Server:
//     - Make your Express app listen for incoming requests on the specified port.
app.listen(PORT, () => console.log(`🟢 Backend running on http://localhost:${PORT}`));

// *** IMPORTANT CONCEPT for routes/auth.js ***
// Inside routes/auth.js, it would typically look something like this (conceptually):
// import express from 'express';
// import { OAuth2Client } from 'google-auth-library';
// // ... other imports like User model, jsonwebtoken

// const router = express.Router(); // This creates a mini Express app just for these routes

// // Put your CLIENT_ID here, as it's used with OAuth2Client
// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // From .env
// const client = new OAuth2Client(CLIENT_ID);

// router.post('/google', async (req, res) => {
//     // All your Google Auth verification, user finding/creating,
//     // JWT generation logic goes here.
// });

// // Don't forget to export the router so index.js can import it!
// export default router;