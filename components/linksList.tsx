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

const colorVariant = siteConfig.accentColor.colorVariant;
const { accentTextClass } = siteConfig.accentColor.colorVariants[colorVariant];

const links = [
    {
        icon: <Github/>,
        href: '#',
        name: 'Github',
    },
    {
        icon: <Twitter/>,
        href: '#',
        name: 'Twitter',
    },
    {
        icon: <Instagram/>,
        href: '#',
        name: 'Instagram',
    },
    {
        icon: <Linkedin/>,
        href: '#',
        name: 'LinkedIn',
    },
    {
        icon: <Mail/>,
        href: `mailto:${siteConfig.links.email}`,
        name: siteConfig.links.email,
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
                        className={`inline-flex gap-3 items-center ${'hover:' + accentTextClass} text-sm font-semibold`}
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
