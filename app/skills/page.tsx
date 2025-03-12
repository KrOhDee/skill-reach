'use client';

import SkillCard from '../_components/SkillCard';
import { useEffect } from 'react';
import { useSkillsStore } from '../_store/skillsStore';
import { calculateProgress, calculateSkillLevel } from '../_utils/skillUtils';

export default function Skills() {
  const { skills, fetchSkills } = useSkillsStore();

  useEffect(() => {
    fetchSkills();
  }, []);

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
