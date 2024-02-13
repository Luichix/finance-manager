import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity';
import { UserSesion } from 'src/types/types';
import ServerError from 'src/utils/serverError';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';
config();
@Injectable()
export class AuthService {
  private jwtServices: JwtService;

  constructor(jwtServices: JwtService) {
    this.jwtServices = jwtServices;
  }

  public async singIn({ username, password }: UserSesion) {
    const user = await User.findOne({ where: { username } });
    if (!user) throw new ServerError('Usuario no existente', 'NOT_FOUND');
    const pass = await this.decryptPassword(password, user.password);
    if (!pass) throw new ServerError('Contraseña Incorrecta', 'NOT_FOUND');
    const { password: _password, ...data } = user;
    return await this.jwtServices.sign(data, {
      secret: process.env.SECRET_VALUE,
    });
  }

  public async decryptPassword(password: string, compare: string) {
    const decrypt = await bcrypt.compare(password, compare);
    return decrypt;
  }
}
