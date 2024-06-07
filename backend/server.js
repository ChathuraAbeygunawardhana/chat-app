import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import User from './models/user.model.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
  /* root route  - http://localhost:5000 */
  res.send('Home route');
});

app.get('/allUsers', async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
