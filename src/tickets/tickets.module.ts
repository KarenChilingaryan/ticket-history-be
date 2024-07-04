import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';

@Module({
  imports: [],
  providers: [TicketsService],
  controllers: [TicketsController],
})
export class TicketsModule { }
