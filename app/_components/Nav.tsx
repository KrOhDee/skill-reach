import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className='bg-primary text-secondary flex justify-around py-6'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/skills'}>Skills</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
