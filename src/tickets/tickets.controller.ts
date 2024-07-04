import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiTags('tickets')
@ApiBearerAuth()
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({ status: 200, description: 'Return all tickets.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findAll() {
    return this.ticketsService.findAll();
  }
}
