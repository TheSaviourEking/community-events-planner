import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Community Event Planner API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
