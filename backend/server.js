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


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '.env');

console.log('------------------------------------');
console.log('Looking for .env at:', envPath);
console.log('File exists:', fs.existsSync(envPath));

if (fs.existsSync(envPath)) {
  const rawContent = fs.readFileSync(envPath, 'utf8');
  console.log('Raw file character length:', rawContent.length);
  console.log('Raw file content preview:\n', JSON.stringify(rawContent));
}
console.log('------------------------------------');

dotenv.config({ path: envPath });

import express from 'express';
import cors from 'cors';
import enquiryRouter from './router/enquiryRouter.js';
import db from './firebaseAdmin.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: "ok", message: "Backend is running smoothly on port 5000" });
});

app.use('/api/enquiries', enquiryRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});