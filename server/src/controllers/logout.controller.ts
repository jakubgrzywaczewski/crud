import { Request, Response, NextFunction } from 'express';

const LogoutController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if(req.user) {
      req.logout();
      res.send("OK");
    }
  } catch (error) {
    next(error);
  }
};

export default LogoutController;
