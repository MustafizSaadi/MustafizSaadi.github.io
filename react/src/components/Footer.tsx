const footerLinks = [
  { title: 'Mail', url: 'mailto:mustafizz996@gmail.com' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/mustafizur-rahman-868836194/' },
  { title: 'GitHub', url: 'https://github.com/MustafizSaadi' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <ul className="flex space-x-4 justify-center">
        {footerLinks.map((link) => (
          <li key={link.title}>
            <a href={link.url} className="hover:underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}