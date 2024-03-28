import { Module } from '@nestjs/common';
import {
  MessageCreateModule
} from '@/discord-gateway/message-create/message-create.module';

@Module({
  imports: [
    MessageCreateModule
  ],
})
export class DiscordGatewayModule {}
