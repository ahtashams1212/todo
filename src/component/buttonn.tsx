import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <div className='font-bold px-5 py-2 border-4 border-green-500 rounded-full text-yellow-300 bg-blue-900'>{children}</div>
    </Link>
  );
}

export default Button;
