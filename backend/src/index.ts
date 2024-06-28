import express, { Request, Response } from 'express';

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/search/:query', async (req: Request, res: Response) => {
  try {
    const query = req.params.query;

    const apiKey = process.env.API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`;

    const response = await fetch(url);
    const json = await response.json();

    return res.send(json).status(200);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Server error');
  }
});

app.listen(port, () => console.log(`Server running at port ${port}`));
