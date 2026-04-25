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
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {navigation.map((item) => (
          <li key={item.title}>
            <Link href={item.url} className="hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}