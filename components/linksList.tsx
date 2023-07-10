import { 
    Linkedin, 
    Github, 
    Twitter, 
    Instagram, 
    Mail 
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

type LinkListProps = {
  nameVisible?: boolean;
  flexDirectionClass?: string;
  paddingClass?: string;
};

const links = [
    {
        icon: <Github/>,
        href: '#',
        name: 'github',
    },
    {
        icon: <Twitter/>,
        href: '#',
        name: 'twitter',
    },
    {
        icon: <Instagram/>,
        href: '#',
        name: 'instagram',
    },
    {
        icon: <Linkedin/>,
        href: '#',
        name: 'linkedin',
    },
    {
        icon: <Mail/>,
        href: `mailto:${siteConfig.links.email}`,
        name: 'email',
    },
]

export default function LinkList({ nameVisible = true, flexDirectionClass = 'flex-col', paddingClass = 'p-6' }: LinkListProps) {
  return (
    <div className={`${paddingClass}`}>
        <ul className={`flex ${flexDirectionClass} gap-3`}>
            {links.map((item, index) => (
                <li
                    key={index}
                    >
                    <Link
                        className='inline-flex gap-3 hover:text-violet-400'
                        href={item.href}
                    >
                        {item.icon}
                        {nameVisible && <span>{item.name}</span>}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
}
