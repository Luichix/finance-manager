import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import ServerError from 'src/utils/serverError';

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: ServerError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const res: Response = ctx.getResponse();
    const statusCode: string = exception.status
      ? exception.statusCode
      : 'INTERNAL_SERVER_ERROR';
    const message: string = exception.message
      ? exception.message
      : 'Error interno del servidor';
    const status: number = exception.status
      ? exception.status
      : HttpStatus.INTERNAL_SERVER_ERROR;

    res.status(status).json({
      statusCode,
      status,
      message,
    });
  }
}
