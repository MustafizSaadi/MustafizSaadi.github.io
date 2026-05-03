import { Menu } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { title: 'Home', url: '/' },
  { title: 'Projects', url: '/projects' },
  { title: 'Publications', url: '/publications' },
  { title: 'Online Certificates', url: '/online_certificates' },
  { title: 'Resume', url: '/resume' },
];

export default function Navigation() {
  return (
    <nav className="flex justify-center px-8 py-6 max-w-5xl mx-auto">
      {/* Mobile Menu Button - Absolute positioned so it doesn't shift the center */}
      <button className="absolute left-8 md:hidden text-gray-400 hover:text-white transition-colors">
        <Menu />
      </button>

      {/* Navigation Links */}
      <div className="flex items-center text-sm uppercase tracking-widest font-medium">
        <ul className="flex space-x-8"> {/* Increased space-x for a cleaner look */}
          {navigation.map((item) => (
            <li key={item.title}>
              <Link href={item.url} className="text-gray-400 hover:text-white transition-colors">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}