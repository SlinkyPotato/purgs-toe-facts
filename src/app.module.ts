import { Module } from '@nestjs/common';
import { CommonConfigModule, DiscordConfigModule } from '@badgebuddy/common';
import Joi from 'joi';
import { SlashCommandsModule } from '@/slash-commands/slash-commands.module';

@Module({
  imports: [
    CommonConfigModule.forRoot({
      validationSchema: {
        REDIS_HOST: Joi.string().optional(),
        REDIS_PORT: Joi.number().optional(),
        REDIS_CACHE_MIN: Joi.number().required(),
      },
    }),
    DiscordConfigModule.forRootAsync(),
    SlashCommandsModule,
  ],
})
export class AppModule {}
