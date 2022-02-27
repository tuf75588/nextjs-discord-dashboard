import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.sendStatus(200);
});

export default authRouter;
