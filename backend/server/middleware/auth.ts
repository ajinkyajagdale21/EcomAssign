import { NextApiRequest, NextApiResponse } from 'next';
import { verifyJwt } from 'jsonwebtoken'; 

export const isAuthenticated = (secret: string) => {
  return (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      throw UnauthorizedError();
    }

    try {
      const decoded = verifyJwt(token, secret); 
      req.user = decoded; 
    } catch (error) {
      throw UnauthorizedError();
    }

    next();
  };
};
