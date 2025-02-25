import Image from 'next/image';

interface SkillCardProps {
  iconSrc: string;
  alt?: string;
  skillName: string;
  skillLevel: number;
  progressValue: number;
}

export default function SkillCard({
  iconSrc,
  alt = 'Skill Icon',
  skillName,
  skillLevel,
  progressValue,
}: SkillCardProps) {
  return (
    <div className='bg-gray-600 flex items-center mx-auto w-3/4 lg:w-1/2 p-4 rounded-full'>
      <div className='pl-4'>
        <Image
          src={iconSrc}
          alt={alt}
          width={10}
          height={10}
          className='p-2 rounded-xl bg-slate-100'
        />
      </div>
      <div className='w-3/5 pl-6'>
        <p>
          <span>{skillName}</span> <span>Lvl.{skillLevel}</span>
        </p>
        <progress value={progressValue} max={100} className='w-full'></progress>
      </div>
      <button className='ml-auto mr-4 p-2 rounded-md bg-slate-100'>+</button>
    </div>
  );
}
