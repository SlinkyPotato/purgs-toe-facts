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
            'Gives a  random toe fact. Just say "toe". Say "whisper to me" to get something special.',
          fields: [
            {
              name: '-> Useful Links',
              value:
                '[Github Repo](https://github.com/SlinkyPotato/purgs-toe-facts)',
              inline: false,
            },
          ],
        },
      ],
    };
  }
}
