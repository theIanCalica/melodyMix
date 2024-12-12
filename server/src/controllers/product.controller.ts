import Product from "../models/product.model";
import { Request, Response, NextFunction } from "express";

// Get all products
exports.getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all products!",
      data: products,
    });
  } catch (error) {
    console.log("Error fetching products", error);
    next(error);
  }
};

// Delete a product
exports.deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};