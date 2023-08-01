import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`
    <h1>Hello from Docker App!!!</h1>
    <h2>Current Time: ${currentTime}</h2>
    <p>Click <a href="/time">here</a> to go to the time page.</p>
  `);
});

app.get('/time', (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ currentTime })
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});