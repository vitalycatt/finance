import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/v1', (req: Request, res: Response) => {
  res.json({ 
    message: 'Mini App API',
    version: '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend API server running on http://localhost:${PORT}`);
});

