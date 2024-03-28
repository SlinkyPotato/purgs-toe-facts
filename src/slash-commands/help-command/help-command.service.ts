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
  onHelpCommand(): InteractionReplyOptions {
    return {
      embeds: [
        {
          title: 'Help Command',
          description:
            'This bot replies back with a "random" toe fact. It is activated whenever toe is mentioned in a message.',
          fields: [
            {
              name: '-> toe',
              value:
                'Mention toe in a channel to get a random toe fact.',
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
