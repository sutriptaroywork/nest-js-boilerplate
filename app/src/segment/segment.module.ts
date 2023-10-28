import { Module } from '@nestjs/common';
import { AdminController } from './controllers';
import { AdminService } from './services';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminService],
})
export class SegmentModule {}
