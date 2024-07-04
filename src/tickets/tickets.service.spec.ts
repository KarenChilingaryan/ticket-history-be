import { TicketsService } from './tickets.service';

const mockTicketRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('TicketsService', () => {
  let service: TicketsService;
  let repository: ReturnType<typeof mockTicketRepository>;

  describe('findAll', () => {
    it('should return an array of tickets', async () => {
      const tickets = [{ id: 1, title: 'The Great Ticket', isbn: '123-456-789', publishedDate: new Date(), author: { id: 1 } }];
      repository.find.mockResolvedValue(tickets);

      expect(await service.findAll()).toEqual(tickets);
    });
  });
});
