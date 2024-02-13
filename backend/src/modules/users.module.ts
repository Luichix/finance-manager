import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from 'src/controllers';
import { UsersService } from 'src/services';
import { DatabaseModule } from './database.module';
import { AuthenticateMiddleware } from 'src/middlewares/autenthicate.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateMiddleware).forRoutes('/users');
  }
}
