import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
