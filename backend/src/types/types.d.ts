import { HttpStatus } from '@nestjs/common';

export interface NewType {
  type: string;
}
export type StatusCode = keyof typeof HttpStatus;

export interface UserSesion {
  username: string;
  password: string;
}
