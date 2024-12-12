import express, { Request, Response } from 'express';
import userRoute from './user.route';
import authRoute from './auth.route';
import threadRoute from './thread.route';

const router = express.Router();

router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/thread', threadRoute);

export default router;
