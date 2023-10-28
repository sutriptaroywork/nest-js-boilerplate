import { Module } from '@nestjs/common';
import { SegmentModule } from './segment/segment.module';

@Module({
  imports: [SegmentModule],
})
export class AppModule {}
