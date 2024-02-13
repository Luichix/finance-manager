import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { DatabaseModule } from './database.module';
dotenv.config();
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_VALUE,
      signOptions: { algorithm: 'HS512' },
    }),
    DatabaseModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
