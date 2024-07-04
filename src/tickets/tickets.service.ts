import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { analyzeMessages } from 'src/services/gpt';

@Injectable()
export class TicketsService {
  constructor(
  ) { }


  async detectSecurityPhrases(tickets: any) {
    const messages = []
    for (const user of tickets) {
      for (const conversation of user.conversations) {
        const analysis = await analyzeMessages(conversation.messages);
        messages.push({ [conversation.conversationId]: analysis })
        return messages;
      }
    }
  }

  async findAll(): Promise<any> {

    try {
      const data = await axios.get(process.env.NEST_APP_MOCK_DATA + 'tickets')

      return data.data.users;
    } catch (error) {
      throw new BadRequestException('Invalid data');
    }
  }
}
