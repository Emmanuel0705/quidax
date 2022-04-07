import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import AppModule from '@modules/app/module';

@Module({
  imports: [
    AppModule,
    MulterModule.register({
      dest: './files',
      limits: {
        fileSize: 10 * 1024 * 1024,
      },
    }),
  ],
})
export default class Modules {}
