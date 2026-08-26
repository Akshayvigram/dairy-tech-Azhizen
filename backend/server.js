// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// import express from 'express';
// import cors from 'cors';
// import enquiryRouter from './router/enquiryRouter.js';
// import db from './firebaseAdmin.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/api/health', (req, res) => {
//   res.json({ status: "ok", message: "Backend is running smoothly on port 5000" });
// });

// app.use('/api/enquiries', enquiryRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import enquiryRouter from './router/enquiryRouter.js';
import db from './firebaseAdmin.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running'
  });
});

app.use('/api/enquiries', enquiryRouter);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});