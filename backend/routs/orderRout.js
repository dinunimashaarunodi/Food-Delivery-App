import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controlers/orderControler.js'


const orderRouter =express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/Verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)


export default orderRouter;