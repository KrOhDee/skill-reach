import SkillCard from '../_components/SkillCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Skills() {
  async function getAllSkills() {
    'use server';
    return await prisma.skill.findMany();
  }

  const skills = await getAllSkills();

  return (
    <div className='pt-4'>
      {skills.map((skill) => {
        const progressValue = (skill.loggedHours / skill.targetHours) * 100;
        const k = 2; // Adjust value to tweak scaling
        const level = Math.floor(
          1 +
            49 *
              ((1 - Math.exp(-k * (skill.loggedHours / skill.targetHours))) /
                (1 - Math.exp(-k)))
        );
        return (
          <SkillCard
            key={skill.id}
            skillName={skill.name}
            skillLevel={level}
            progressValue={progressValue}
            iconSrc={`/${skill.icon}`}
            alt={skill.alt}
          />
        );
      })}
    </div>
  );
}
