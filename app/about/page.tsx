import ImageTextRow from '../_components/ImageTextRow';

export default function About() {
  return (
    <div className='flex flex-col gap-20 p-5'>
      <div className='flex min-h-[250px] lg:h-[350px] bg-slate-300 rounded-3xl px-6'>
        <ImageTextRow imageSrc='/martial-art.svg'>
          {`I am building SkillReach to track my progress in my hobbies in a way that actually reflects how much time and effort I’ve put in. Instead of a generic "10,000-hour rule," I'm using the most scientific estimates for how long it takes to reach mastery in different skills. Each hobby or skill has its own target number of hours, and the app calculates progress with a progress bar and a level system, similar to a video game. Level 50 is the max, making it feel rewarding to advance. Having this visual tracker keeps me motivated to study and practice more consistently.`}
        </ImageTextRow>
      </div>
      <div className='flex min-h-[250px] lg:h-[350px] bg-slate-300 rounded-3xl px-6'>
        <ImageTextRow imageSrc='/playing-guitar.svg' isReversed={true}>
          {`My hobbies reflect a pattern in my life—I’m drawn to things that require deep learning and long-term dedication. Jiu-jitsu is one of my longest-standing hobbies; I trained for over four years and plan to start again soon. I love that there's always more to learn, and every session is a chance to refine techniques. Coding is similar in that way—I have a BS in Software Engineering, and I enjoy the problem-solving and endless learning that comes with it. I've also been learning Japanese for three years, and I like how it challenges me in a completely different way compared to my other hobbies.`}
        </ImageTextRow>
      </div>
      <div className='flex min-h-[250px] lg:h-[350px] bg-slate-300 rounded-3xl px-6'>
        <ImageTextRow imageSrc='/studying.svg'>
          {`Weight training is another major hobby of mine, and I’ve been doing it for several years. I enjoy pushing myself and seeing my strength increase over time. There's something satisfying about gradually lifting heavier weights and making steady progress. More recently, I picked up guitar and have been learning for several months. Like jiu-jitsu and Japanese, it’s a skill that takes years to truly master, which is part of why I enjoy it. All of these hobbies keep me engaged and constantly improving. This app ties them together, letting me see exactly how far I’ve come and giving me a clear path to mastery in everything I do.`}
        </ImageTextRow>
      </div>
    </div>
  );
}
