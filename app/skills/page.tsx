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
    <div>
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skillName={skill.name}
          skillLevel={1}
          progressValue={50}
          iconSrc='../file.svg'
        />
      ))}
    </div>
  );
}
