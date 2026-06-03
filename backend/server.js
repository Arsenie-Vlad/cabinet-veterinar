import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
// import petRoutes from './routes/petRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rute de bază (le vom popula ulterior)
// app.use('/api/auth', authRoutes);
// app.use('/api/pets', petRoutes);

app.get('/api', (req, res) => {
  res.send('API-ul Cabinetului Veterinar funcționează!');
});

app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
