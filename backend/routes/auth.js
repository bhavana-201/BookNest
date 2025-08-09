import { OAuth2Client } from 'google-auth-library';// Google's official client library for OAuth

const clientId = .

export default auth(){
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
}