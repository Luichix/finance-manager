import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule, UsersModule } from './modules';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { CorsMiddleware, ErrorMiddleware } from './middlewares';
import { AuthService, UsersService } from './services';
import { AuthController, UsersController } from './controllers';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UsersController, AuthController],
  providers: [
    AppService,
    AuthService,
    UsersService,
    { provide: APP_FILTER, useClass: ErrorMiddleware },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure('dev');
    consumer.apply(MorganMiddleware).forRoutes('*');
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
