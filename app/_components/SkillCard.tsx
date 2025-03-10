import Image from 'next/image';
import Modal from './Modal';

interface SkillCardProps {
  iconSrc: string;
  alt?: string;
  skillName: string;
  skillLevel: number;
  progressValue: number;
  loggedHours: number;
  targetHours: number;
}

export default function SkillCard({
  iconSrc,
  alt = 'Skill Icon',
  skillName,
  skillLevel,
  progressValue,
  loggedHours,
  targetHours,
}: SkillCardProps) {
  return (
    <div className='bg-gray-600 flex items-center mx-auto w-3/4 lg:w-1/2 p-4 rounded-full mb-2'>
      <div className='md:pl-4'>
        <Image src={iconSrc} alt={alt} width={50} height={50} />
      </div>
      <div className='w-3/5 md:w-4/5 pl-6'>
        <p>
          <span>{skillName}</span> <span>Lvl. {skillLevel}</span>
        </p>
        <progress value={progressValue} max={100} className='w-full'></progress>
        <p className='hidden md:block'>
          {loggedHours} hours logged out of {targetHours} hours
        </p>
      </div>
      <Modal />
    </div>
  );
}
