import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Next,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UsersService } from 'src/services';

@Controller('users')
export class UsersController {
  private UsersService: UsersService;

  constructor(UsersService: UsersService) {
    this.UsersService = UsersService;
  }

  @Get() async findUsers(@Res() res: Response) {
    const result = await this.UsersService.find();
    res.status(HttpStatus.ACCEPTED).json(result);
  }

  @Post() async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    try {
      const { body } = req;
      const query = await this.UsersService.create(body);
      res.status(HttpStatus.CREATED).json(query);
    } catch (error) {
      next(error);
    }
  }

  @Delete('/:id') async deleteUser(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const query = await this.UsersService.delete(id);
      res.status(HttpStatus.NO_CONTENT).json(query);
    } catch (error) {
      next(error);
    }
  }
}
