import { Request, Response, NextFunction } from 'express';

const ProductsController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
};

export default ProductsController;
