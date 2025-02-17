import { ProductModel } from "../models/productModel"
import express,{Request,Response} from 'express'
import asyncHandler from "express-async-handler"
import { sampleProducts, sampleUsers } from "../data"
import { UserModel } from "../models/userModel"

const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)
    const createdUsers = await UserModel.insertMany(sampleUsers)
    res.json({ createdProducts , createdUsers})
  })
) 
export default seedRouter