import { HttpStatus } from '@nestjs/common';
import { StatusCode } from 'src/types/types';

class ServerError extends Error {
  public statusCode: StatusCode;
  public status: number;
  public isOperational: boolean;
  constructor(message: string, code: StatusCode) {
    super(message);
    this.statusCode = code;
    this.status = HttpStatus[code] || 500;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ServerError;
