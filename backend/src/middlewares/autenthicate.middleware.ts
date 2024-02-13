import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { config } from 'dotenv';
import ServerError from 'src/utils/serverError';
config();

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  private jwtServices: JwtService;
  private secret?: string = process.env.SECRET_VALUE;
  constructor(jwtServices: JwtService) {
    this.jwtServices = jwtServices;
  }
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      const token = authorization.split('Bearer ').at(-1);
      if (!this.secret || !token)
        throw new ServerError('Error, Secret value undefined', 'NOT_FOUND');
      const decodification = this.jwtServices.verify(token, {
        secret: this.secret,
      });
      res.locals.userData = decodification.dataValues;
      next();
    } catch (error) {
      next(error);
    }
  }
}
