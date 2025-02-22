export default function SkillCard() {
  // props: icon, skill, level, value
  return (
    <div className='bg-gray-600 flex items-center mx-auto w-3/4 lg:w-1/2 p-4 rounded-full'>
      <div className='pl-4'>
        <p className='p-2 rounded-xl bg-slate-100'>icn</p>
      </div>
      <div className='w-3/5 pl-6'>
        <p>
          <span>Name of skill</span> <span>lvl</span>
        </p>
        <progress value={50} max={100} className='w-full'></progress>
      </div>
      <button className='ml-auto mr-4 p-2 rounded-md bg-slate-100'>+</button>
    </div>
  );
}
