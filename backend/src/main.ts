import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import swaggerJsdoc from 'swagger-jsdoc';
import YAML from 'yamljs';
import { patito } from 'example';
dotenv.config();

class ServerInit {
  private PORT: string = process.env.PORT || '3000';
  private HOST: string = process.env.HOST || 'localhost';
  private PREFIX: string = 'api/v1';
  private app: INestApplication;
  constructor() {
    this.bootstrap();
    this.middlewares();
  }
  private middlewares() {}

  public async bootstrap() {
    this.app = await NestFactory.create(AppModule, { cors: { origin: '*' } });
    const swaggerDocument = await import('../swagger.json');
    SwaggerModule.setup('api-docs', this.app, swaggerDocument);
    this.app.setGlobalPrefix(this.PREFIX);
    this.app.listen(this.PORT);
    if (this.PORT && this.HOST) {
      const server = `http://${this.HOST}:${this.PORT}`;
      console.log(`🚀 Server deployed at: ${server}`);
      console.log(`📝 View docs at: ${server}/api-docs`);
    }
  }
}

const server = new ServerInit();
