import { ProductModel } from "../models/productModel"
import express,{Request,Response} from 'express'
import asyncHandler from "express-async-handler"
import { sampleProducts } from "../data"

const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleProducts)
    res.send({ createdProducts })
  })
)
export default seedRouter