import { ProductModel } from "../models/productModel"

export const productRouter = express.Router()

productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
  })
)