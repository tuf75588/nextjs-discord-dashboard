import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.json({ message: 'hello from /auth!' });
});

export default authRouter;
