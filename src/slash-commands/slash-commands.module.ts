import { Module } from '@nestjs/common';
import { HelpCommandModule } from '@/slash-commands/help-command/help-command.module';

@Module({
  imports: [
    HelpCommandModule,
  ],
})
export class SlashCommandsModule {}
