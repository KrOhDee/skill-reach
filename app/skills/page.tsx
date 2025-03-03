import SkillCard from '../_components/SkillCard';
import { PrismaClient } from '@prisma/client';
import { calculateProgress, calculateSkillLevel } from '../_utils/skillUtils';

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
        const progressValue = calculateProgress(
          skill.loggedHours,
          skill.targetHours
        );
        const level = calculateSkillLevel(skill.loggedHours, skill.targetHours);
        return (
          <SkillCard
            key={skill.id}
            skillName={skill.name}
            skillLevel={level}
            progressValue={progressValue}
            iconSrc={`/${skill.icon}`}
            alt={skill.alt}
            loggedHours={skill.loggedHours}
            targetHours={skill.targetHours}
          />
        );
      })}
    </div>
  );
}
