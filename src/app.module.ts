import { Module } from '@nestjs/common';
import { SlashCommandsModule } from '@/slash-commands/slash-commands.module';
import { DiscordGatewayModule } from '@/discord-gateway/discord-gateway.module';
import { DiscordModule } from '@discord-nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GatewayIntentBits, Partials } from 'discord.js';
import { ENV_DISCORD_BOT_TOKEN } from '@/app.constants';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      cache: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().required(),
        DISCORD_BOT_TOKEN: Joi.string().required(),
        DISCORD_BOT_APPLICATION_ID: Joi.string().required(),
        DISCORD_BOT_PUBLIC_KEY: Joi.string().required(),
        DISCORD_OWNER_ID: Joi.string().required(),
      }),
      validationOptions: {},
    }),
    DiscordModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>(ENV_DISCORD_BOT_TOKEN)!,
        discordClientOptions: {
          intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.MessageContent,
          ],
          partials: [
            Partials.Message,
            Partials.Channel,
            Partials.Reaction,
            Partials.User,
          ],
        },
        failOnLogin: true,
      }),
    }),
    SlashCommandsModule,
    DiscordGatewayModule,
  ],
})
export class AppModule {}
