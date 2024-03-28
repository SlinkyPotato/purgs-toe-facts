import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { InteractionReplyOptions } from 'discord.js';

@Command({
  name: 'help',
  description:
    'Information on all the commands available.',
})
@Injectable()
export class HelpCommandService {
  @Handler()
  async onHelpCommand(): Promise<InteractionReplyOptions> {
    return {
      embeds: [
        {
          title: 'Help Command',
          description:
            'This bot can do things. ',
          fields: [
            {
              name: '-> /dosomething',
              value:
                'A description of what this command does.',
              inline: false,
            },
            {
              name: '-> Useful Links',
              value:
                '[Github](https://github.com/SlinkyPotato/discord-bot-template)',
              inline: false,
            },
          ],
        },
      ],
    };
  }
}
