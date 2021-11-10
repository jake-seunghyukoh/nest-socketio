import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageGateway } from './message/message.gateway';
import { MessageModule } from './message/message.module';
import { AppController } from './app.controller';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
    MessageModule,
  ],
  controllers: [AppController],
  providers: [MessageGateway],
})
export class AppModule {}
