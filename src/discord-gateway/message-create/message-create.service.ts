import { Injectable, Logger } from '@nestjs/common';
import { On } from '@discord-nestjs/core';
import { Message } from 'discord.js';

@Injectable()
export class MessageCreateService {
  constructor(private readonly logger: Logger) {}

  @On('messageCreate')
  async onMessageCreate(message: Message): Promise<any> {
    try {
      if (message.author.bot) return;
      if (message.content.match(/\s*toe/gi)
        ?? message.content.match(/\s*toes/gi)
        ?? message.content.match(/^\s*evertoe$/gi)) {
        await message.reply(this.TOE_FACTS[Math.floor(Math.random() * this.TOE_FACTS.length)]);
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  TOE_FACTS = [
    'Toes are digits of the foot and are analogous to fingers on the hand.',
    'Humans typically have five toes on each foot.',
    'The big toe is also known as the hallux.',
    'Toes help with balance and stability while standing and walking.',
    'The longest toe is usually the second toe, but this can vary among individuals.',
    'Some people have a condition called Morton\'s toe, where the second toe is longer than the big toe.',
    'Toes are composed of bones called phalanges, similar to fingers.',
    'Each toe has three phalanges, except for the big toe, which has two.',
    'Toenails are made of a tough protein called keratin.',
    'The skin on toes is thicker than on other parts of the body to withstand pressure and friction.',
    'Bunions are bony bumps that form at the base of the big toe.',
    'Hammertoes are toes that bend downward at the middle joint.',
    'The practice of foot binding, common in ancient China, aimed to alter the shape of women\'s feet, including their toes.',
    'The average person takes around 10,000 steps per day, putting a lot of pressure on their toes.',
    'Some people can voluntarily move their toes individually, while others cannot.',
    'Toes can be fractured or broken due to injury or trauma.',
    'Athletes often tape their toes to prevent injuries during sports.',
    'There are various exercises to strengthen and stretch the muscles in the toes and feet.',
    'Reflexologists believe that different areas of the toes correspond to specific organs and systems in the body.',
    'Some cultures consider touching or pointing with the toes to be impolite.',
    'Some people have a condition called syndactyly, where two or more toes are fused together.',
    'Toes can be affected by arthritis, causing pain and stiffness.',
    'Some shoes are specifically designed to accommodate different toe shapes, such as wide toe boxes for bunions.',
    'The term "toe-tapping" refers to a rhythmic movement of the toes, often done subconsciously.',
    'The toes play a crucial role in the push-off phase of walking and running.',
    'Toes are often painted with nail polish for cosmetic purposes.',
    'There are surgical procedures available to correct deformities and disorders of the toes.',
    'Toes can become numb due to poor circulation or nerve damage.',
    'Some people have a reflex that causes their toes to curl when tickled.',
    'The toes have a rich network of blood vessels and nerves.',
    'Toes can be affected by frostbite if exposed to extreme cold for too long.',
    'In some cultures, toe rings are worn as jewelry.',
    'Some people have a habit of cracking their toes, similar to cracking knuckles.',
    'The toes provide feedback to the brain about the texture and temperature of surfaces.',
    'Ballet dancers often dance on their tiptoes, known as pointe work.',
    'Some yoga poses involve stretching and flexing the toes.',
    'Toes can be amputated due to severe injury or medical conditions.',
    'In ancient Egypt, people painted their toenails with henna.',
    'Certain medical conditions, such as diabetes, can affect the health of the toes due to poor circulation and nerve damage.',
    'The toes have a role in proprioception, which is the body\'s ability to sense its position and movement in space.',
    'Some people have a fear of feet, known as podophobia.',
    'Toes can be stubbed, causing temporary pain and possibly injury.',
    'The flexibility of the toes allows for gripping and manipulation of objects with the feet.',
    'Toes can become swollen due to injury, infection, or other medical conditions.',
    'The toes can be affected by edema, which is swelling caused by fluid retention.',
    'Some people have a condition called "toe walking," where they habitually walk on their tiptoes.',
    'Toes can develop calluses or corns due to friction and pressure.',
    'In some cultures, kissing or touching someone\'s toes is a sign of respect or submission.',
    'Some animals, such as primates and certain birds, have opposable toes that aid in grasping objects.',
    'The toes help distribute body weight evenly while standing and walking.',
    'https://www.youtube.com/watch?v=3fyYXqzKvQo',
    'Some people have a condition called "toe walking," where they habitually walk on their tiptoes.',
    'Toes can develop calluses or corns due to friction and pressure.',
    'In some cultures, kissing or touching someone\'s toes is a sign of respect or submission.',
    'Toes can be affected by fungal nail infections, causing discoloration and thickening of the nails.',
    'Some animals, such as primates and certain birds, have opposable toes that aid in grasping objects.',
    'The toes help distribute body weight evenly while standing and walking.',
    'Injuries to the toes can affect a person\'s ability to participate in physical activities and sports.',
    'The toes can be affected by neuropathy, a condition characterized by nerve damage.',
    'Shoes that are too tight or narrow can cause discomfort and deformities in the toes.',
    'The toes contain muscles, tendons, and ligaments that allow for movement and stability.',
    'Some people have a condition called "toe curling syndrome," where their toes curl involuntarily, especially when they are ','relaxed or sleeping.',
    'The toes can be affected by blisters, especially when wearing ill-fitting shoes.',
    'Toes play a role in maintaining balance and preventing falls, particularly in older adults.',
    'The toes can be affected by melanoma, a type of skin cancer.',
    'Some people have a condition called "overlapping toes," where one toe overlaps another.',
    'The toes can be affected by frostnip, a milder form of frostbite characterized by numbness and tingling.',
    'Toes can be affected by neuromas, which are benign growths of nerve tissue.',
    'The toes contain sweat glands that help regulate temperature and moisture levels.',
    'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    'Some people have a condition called "toe walking gait," where they habitually walk on their toes rather than their heels.',
    'The toes can be affected by blisters, particularly when wearing new or tight shoes.',
    'Toes can become dislocated or sprained due to injury or trauma.',
    'Some people have a condition called "floppy toes," where their toes bend excessively backward when walking or standing.',
    'Toes can be affected by fungal infections, such as athlete\'s foot, which thrive in warm, moist environments.',
    'The toes contain small muscles called intrinsic muscles, which help control movement and stability.',
    'Some people have a condition called "curly toes," where their toes curl downward or inward due to muscle imbalances.',
    'Toes can be affected by chilblains, painful inflammation of small blood vessels in response to cold exposure.',
    'The toes can be affected by blisters, particularly when wearing tight or ill-fitting shoes.',
    'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    'Some people have a condition called "toe walking gait," where they habitually walk on their toes rather than their heels.',
    'The toes can be affected by blisters, particularly when wearing new or tight shoes.',
    'Toes can become dislocated or sprained due to injury or trauma.',
    'Some people have a condition called "floppy toes," where their toes bend excessively backward when walking or standing.',
    'Toes can be affected by fungal infections, such as athlete\'s foot, which thrive in warm, moist environments.',
    'The toes contain small muscles called intrinsic muscles, which help control movement and stability.',
    'Some people have a condition called "curly toes," where their toes curl downward or inward due to muscle imbalances.',
    'Toes can be affected by chilblains, painful inflammation of small blood vessels in response to cold exposure.',
    'The toes can be affected by blisters, particularly when wearing tight or ill-fitting shoes.',
    'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
    'Some people have a condition called "toe walking gait," where they habitually walk on their toes rather than their heels.',
    'The toes can be affected by blisters, particularly when wearing new or tight shoes.',
    'Toes can become dislocated or sprained due to injury or trauma.',
    'Some people have a condition called "floppy toes," where their toes bend excessively backward when walking or standing.',
    'Toes can be affected by fungal infections, such as athlete\'s foot, which thrive in warm, moist environments.',
    'The toes contain small muscles called intrinsic muscles, which help control movement and stability.',
    'Some people have a condition called "curly toes," where their toes curl downward or inward due to muscle imbalances.',
    'Toes can be affected by chilblains, painful inflammation of small blood vessels in response to cold exposure.',
    'The toes can be affected by blisters, particularly when wearing tight or ill-fitting shoes.',
    'Toes can become stiff and painful due to arthritis or other inflammatory conditions.',
  ];
}
