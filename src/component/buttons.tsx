import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <div className="font-bold py-2 px-4 border-4 border-red-300 rounded-md bg-blue-700 text-white">{children}</div>
    </Link>
  );
}

export default Button;