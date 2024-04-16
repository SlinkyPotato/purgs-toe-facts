import { Injectable, Logger } from '@nestjs/common';
import { On } from '@discord-nestjs/core';
import { Message } from 'discord.js';
import path from 'path';

@Injectable()
export class MessageCreateService {

  activeWhisperUsers = new Map<string, boolean>();

  constructor(private readonly logger: Logger) {}

  @On('messageCreate')
  async onMessageCreate(message: Message): Promise<any> {
    try {
      if (message.author.bot) return;

      if (message.content.match(/\s*whisper to me/gi) && !this.activeWhisperUsers.get(message.author.id)) {
        this.activeWhisperUsers.set(message.author.id, true);
        await message.reply({
          files: [{
            name: 'whisper.mp3',
            attachment: path.join(__dirname, '../../assets/audio', 'bby_daddy.mp3'),
          }]

        })
      } else if (message.content.match(/\s*stop whisper/gi)) {
        this.activeWhisperUsers.delete(message.author.id);
        await message.reply('https://tenor.com/view/crycat-crying-cat-crying-cat-thumbs-up-thumbs-up-ok-gif-17048449662472934214');
      }

      if (message.content.match(/\s*toe/gi)
        ?? message.content.match(/\s*toes/gi)
        ?? message.content.match(/^\s*evertoe$/gi)) {

        if (message.author.id === '429026586570784770') {
          await message.reply({
            files: [{
              attachment: path.join(__dirname, '../../assets/audio', 'ryan.mp3'),
            }]
          });
        } else {
          const keys = Object.keys(this.TOE_FACTS).map(Number);
          const randomToeFactIndex = Math.floor(Math.random() * keys.length);
          if (randomToeFactIndex != 120 && this.activeWhisperUsers.get(message.author.id)) {
            const factName = `fact${randomToeFactIndex}.mp3`;
            await message.reply({
              files: [{
                attachment: path.join(__dirname, '../../assets/audio', factName),
              }]
            });
          } else {
            await message.reply(this.TOE_FACTS[randomToeFactIndex]);
          }
        }
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  TOE_FACTS: Record<number, string> = {
    1: 'The longest toe is usually the second toe, but this can vary among individuals.',
    2: 'Toes are digits of the foot and are analogous to fingers on the hand.',
    3: 'Humans typically have five toes on each foot.',
    4: 'The big toe is also known as the hallux.',
    5: 'Toes help with balance and stability while standing and walking.',
    6: 'Some people have a condition called Morton\'s toe, where the second toe is longer than the big toe.',
    7: 'Toes are composed of bones called phalanges, similar to fingers.',
    8: 'Each toe has three phalanges, except for the big toe, which has two.',
    9: 'Toenails are made of a tough protein called keratin.',
    10: 'The skin on toes is thicker than on other parts of the body to withstand pressure and friction.',
    11: 'Bunions are bony bumps that form at the base of the big toe.',
    12: 'Hammertoes are toes that bend downward at the middle joint.',
    13: 'The practice of foot binding, common in ancient China, aimed to alter the shape of women\'s feet, including their toes.',
    14: 'The average person takes around 10,000 steps per day, putting a lot of pressure on their toes.',
    15: 'Some people can voluntarily move their toes individually, while others cannot.',
    16: 'Toes can be fractured or broken due to injury or trauma.',
    17: 'Athletes often tape their toes to prevent injuries during sports.',
    18: 'There are various exercises to strengthen and stretch the muscles in the toes and feet.',
    19: 'Reflexologists believe that different areas of the toes correspond to specific organs and systems in the body.',
    20: 'Some cultures consider touching or pointing with the toes to be impolite.',
    21: 'Some people have a condition called syndactyly, where two or more toes are fused together.',
    22: 'Toes can be affected by arthritis, causing pain and stiffness.',
    23: 'Some shoes are specifically designed to accommodate different toe shapes, such as wide toe boxes for bunions.',
    24: 'The term "toe-tapping" refers to a rhythmic movement of the toes, often done subconsciously.',
    25: 'The toes play a crucial role in the push-off phase of walking and running.',
    26: 'Toes are often painted with nail polish for cosmetic purposes.',
    27: 'There are surgical procedures available to correct deformities and disorders of the toes.',
    28: 'Toes can become numb due to poor circulation or nerve damage.',
    29: 'Some people have a reflex that causes their toes to curl when tickled.',
    30: 'The toes have a rich network of blood vessels and nerves.',
    31: 'Toes can be affected by frostbite if exposed to extreme cold for too long.',
    32: 'In some cultures, toe rings are worn as jewelry.',
    33: 'Some people have a habit of cracking their toes, similar to cracking knuckles.',
    34: 'The toes provide feedback to the brain about the texture and temperature of surfaces.',
    35: 'Ballet dancers often dance on their tiptoes, known as pointe work.',
    36: 'Some yoga poses involve stretching and flexing the toes.',
    37: 'Toes can be amputated due to severe injury or medical conditions.',
    38: 'In ancient Egypt, people painted their toenails with henna.',
    39: 'Certain medical conditions, such as diabetes, can affect the health of the toes due to poor circulation and nerve damage.',
    40: 'The toes have a role in proprioception, which is the body\'s ability to sense its position and movement in space.',
    41: 'Some people have a fear of feet, known as podophobia.',
    42: 'Toes can be stubbed, causing temporary pain and possibly injury.',
    43: 'The flexibility of the toes allows for gripping and manipulation of objects with the feet.',
    44: 'Toes can become swollen due to injury, infection, or other medical conditions.',
    45: 'The toes can be affected by edema, which is swelling caused by fluid retention.',
    46: 'Some people have a condition called "toe walking," where they habitually walk on their tiptoes.',
    47: 'Toes can develop calluses or corns due to friction and pressure.',
    48: 'In some cultures, kissing or touching someone\'s toes is a sign of respect or submission.',
    49: 'Some animals, such as primates and certain birds, have opposable toes that aid in grasping objects.',
    50: 'The toes help distribute body weight evenly while standing and walking.',
    51: 'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    52: 'Some people have a condition called "toe walking," where they habitually walk on their tiptoes.',
    53: 'Toes can develop calluses or corns due to friction and pressure.',
    54: 'In some cultures, kissing or touching someone\'s toes is a sign of respect or submission.',
    55: 'Toes can be affected by fungal nail infections, causing discoloration and thickening of the nails.',
    56: 'Some animals, such as primates and certain birds, have opposable toes that aid in grasping objects.',
    57: 'The toes help distribute body weight evenly while standing and walking.',
    58: 'Injuries to the toes can affect a person\'s ability to participate in physical activities and sports.',
    59: 'The toes can be affected by neuropathy, a condition characterized by nerve damage.',
    60: 'Shoes that are too tight or narrow can cause discomfort and deformities in the toes.',
    61: 'The toes contain muscles, tendons, and ligaments that allow for movement and stability.',
    62: 'Some people have a condition called "toe curling syndrome," where their toes curl involuntarily, especially when they are relaxed or sleeping.',
    63: 'The word "toe" originates from the Old English word "tā," meaning "finger" or "toe."',
    64: 'The toes can be affected by blisters, especially when wearing ill-fitting shoes.',
    65: 'Toes play a role in maintaining balance and preventing falls, particularly in older adults.',
    66: 'The toes can be affected by melanoma, a type of skin cancer.',
    67: 'Some people have a condition called "overlapping toes," where one toe overlaps another.',
    68: 'The toes can be affected by frostnip, a milder form of frostbite characterized by numbness and tingling.',
    69: 'Toes can be affected by smoking marijuana. People who smoke marijuana may experience a condition called "cannabis toe," which causes discoloration and swelling of the toes.',
    70: 'The toes contain sweat glands that help regulate temperature and moisture levels.',
    71: 'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    72: 'Some people have a condition called "toe walking gait," where they habitually walk on their toes rather than their heels.',
    73: 'The toes can be affected by blisters, particularly when wearing new or tight shoes.',
    74: 'Toes can become dislocated or sprained due to injury or trauma.',
    75: 'Some people have a condition called "floppy toes," where their toes bend excessively backward when walking or standing.',
    76: 'Toes can be affected by fungal infections, such as athlete\'s foot, which thrive in warm, moist environments.',
    77: 'The toes contain small muscles called intrinsic muscles, which help control movement and stability.',
    78: 'Some people have a condition called "curly toes," where their toes curl downward or inward due to muscle imbalances.',
    79: 'Toes can be affected by chilblains, painful inflammation of small blood vessels in response to cold exposure.',
    80: 'The toes can be affected by blisters, particularly when wearing tight or ill-fitting shoes.',
    81: 'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    82: 'Some people have a condition called "toe walking gait," where they habitually walk on their toes rather than their heels.',
    83: 'The toes can be affected by blisters, particularly when wearing new or tight shoes.',
    84: 'Toes can become dislocated or sprained due to injury or trauma.',
    85: 'Some people have a condition called "floppy toes," where their toes bend excessively backward when walking or standing.',
    86: 'Toes can be affected by fungal infections, such as athlete\'s foot, which thrive in warm, moist environments.',
    87: 'The toes contain small muscles called intrinsic muscles, which help control movement and stability.',
    88: 'Some people have a condition called "curly toes," where their toes curl downward or inward due to muscle imbalances.',
    89: 'Toes can be affected by chilblains, painful inflammation of small blood vessels in response to cold exposure.',
    90: 'The toes can be affected by blisters, particularly when wearing tight or ill-fitting shoes.',
    91: 'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    92: 'Some people have a condition called "toe walking gait," where they habitually walk on their toes rather than their heels.',
    93: 'The toes can be affected by blisters, particularly when wearing new or tight shoes.',
    94: 'Toes can become dislocated or sprained due to injury or trauma.',
    95: 'Some people have a condition called "floppy toes," where their toes bend excessively backward when walking or standing.',
    96: 'Toes can be affected by fungal infections, such as athlete\'s foot, which thrive in warm, moist environments.',
    97: 'The toes contain small muscles called intrinsic muscles, which help control movement and stability.',
    98: 'Some people have a condition called "curly toes," where their toes curl downward or inward due to muscle imbalances.',
    99: 'Toes can be affected by chilblains, painful inflammation of small blood vessels in response to cold exposure.',
    100: 'The toes can be affected by blisters, particularly when wearing tight or ill-fitting shoes.',
    101: 'Toes contain numerous sweat glands, contributing to foot odor.',
    102: 'The sensation of "pins and needles" in the toes is often caused by pressure on nerves, such as when sitting cross-legged for too long.',
    103: 'Some people have a condition called "toe walking," where they habitually walk on the balls of their feet without their heels touching the ground.',
    104: 'The medical term for an ingrown toenail is "onychocryptosis."',
    105: 'Toes are crucial for maintaining balance and stability during activities like standing on one leg.',
    106: 'The toes have a complex system of tendons and ligaments that allow for movement and flexibility.',
    107: 'Some people have a condition called "mallet toe," where the joint closest to the tip of the toe is bent abnormally downward.',
    108: 'In rare cases, extra toes, known as polydactyly, can occur, resulting in a person having more than five toes on one or both feet.',
    109: 'The practice of reflexology involves applying pressure to specific points on the toes (and feet) to promote healing and relaxation in other parts of the body.',
    110: 'Toes can develop calluses from repeated friction or pressure, such as from wearing tight shoes.',
    111: 'Certain yoga poses, like "toe stand," require strong and flexible toes for balance and stability.',
    112: 'The toes contain a high concentration of sensory receptors, allowing for the perception of touch, temperature, and pressure.',
    113: 'Some people have a genetic condition called brachydactyly, where the toes (and fingers) are unusually short.',
    114: 'The Greek philosopher Socrates believed that the human foot was a divine gift that allowed humans to stand upright and explore the world.',
    115: 'The toes play a crucial role in the propulsion phase of walking and running, pushing off the ground to move forward.',
    116: 'Toes can be affected by fungal infections, such as toenail fungus, which can cause thickening, discoloration, and brittleness of the nails.',
    117: 'The term "toe jam" refers to the accumulation of dirt, dead skin cells, and sweat between the toes.',
    118: 'Toes can develop blisters from friction or rubbing against shoes during activities like hiking or running.',
    119: 'Some people have a condition called "hammer toe," where one or more toes are bent at the middle joint, resembling a hammer.',
    120: 'Toe fact 120: https://www.youtube.com/watch?v=3fyYXqzKvQo',
  };
}
