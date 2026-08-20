import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import enquiryRouter from './router/enquiryRouter.js';
import db from './firebaseAdmin.js';

const app = express();

app.use(cors());
app.use(express.json());

// Add this right above app.use('/api/enquiries', enquiryRouter);
app.get('/api/health', (req, res) => {
  res.json({ status: "ok", message: "Backend is running smoothly on port 5000" });
});

app.use('/api/enquiries', enquiryRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});