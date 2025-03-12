'use client';

import { useSkillsStore } from './_store/skillsStore';
import DateTime from './_components/DateTime';
import { useEffect } from 'react';

export default function Home() {
  const { skills, fetchSkills } = useSkillsStore();

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className='p-2'>
      {skills.map((skill) => {
        return (
          <div key={skill.id}>
            {skill.name}
            target hours: {skill.targetHours}
            logged hours: {skill.loggedHours}
          </div>
        );
      })}
      <DateTime />
    </div>
  );
}
