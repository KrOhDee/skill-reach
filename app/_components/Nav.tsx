import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className='bg-primary text-secondary flex justify-around py-4'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/skills'}>Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
