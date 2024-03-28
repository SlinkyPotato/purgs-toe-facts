import { Logger, Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import {
  MessageCreateService
} from '@/discord-gateway/message-create/message-create.service';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [MessageCreateService, Logger],
})
export class MessageCreateModule {}
