import { Twitter, Instagram, Github, Music } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://twitter.com',
    color: 'hover:bg-blue-500/20 hover:border-blue-500/50',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
    href: 'https://instagram.com',
    color: 'hover:bg-pink-500/20 hover:border-pink-500/50',
  },
  {
    name: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com',
    color: 'hover:bg-gray-500/20 hover:border-gray-500/50',
  },
  {
    name: 'Spotify',
    icon: <Music className="h-5 w-5" />,
    href: 'https://spotify.com',
    color: 'hover:bg-green-500/20 hover:border-green-500/50',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-xl border border-white/20 ${link.color} transition-all duration-300 group`}
          aria-label={`Follow us on ${link.name}`}
        >
          <div className="text-gray-400 group-hover:text-white transition-colors">
            {link.icon}
          </div>
        </a>
      ))}
    </div>
  );
}