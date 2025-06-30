import express from 'express';
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';

const app = express();
const PORT = 5000;
const CLIENT_ID = '849758882963-7gthf41bc7gp4q7ul3eovjs6etejvus1.apps.googleusercontent.com'; // paste your actual one

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

const client = new OAuth2Client(CLIENT_ID);

app.post('/api/auth/google', async (req, res) => {
  const { credential } = req.body;

  try {
    console.log("🔐 Received credential:", credential);

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { name, email, picture } = payload;

    console.log('✅ User verified:', { name, email });

    res.status(200).json({ name, email, picture });
  } catch (err) {
    console.error('❌ Invalid token:', err);
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(PORT, () => console.log(`🟢 Backend running on http://localhost:${PORT}`));
