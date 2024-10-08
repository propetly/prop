import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { AgenciesModule } from './modules/agencies/agencies.module';
import { FeedsModule } from './modules/feeds/feeds.module';
import { PropertiesModule } from './modules/properties/properties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    SubscriptionModule,
    AgenciesModule,
    FeedsModule,
    PropertiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
