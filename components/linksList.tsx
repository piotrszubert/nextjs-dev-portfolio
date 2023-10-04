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
        href:  siteConfig.links.github,
        name: 'Github',
    },
    // {
    //     icon: <Twitter/>,
    //     href:  siteConfig.links.twitter,
    //     name: 'Twitter',
    // },
    // {
    //     icon: <Instagram/>,
    //     href:  siteConfig.links.instagram,
    //     name: 'Instagram',
    // },
    {
        icon: <Linkedin/>,
        href:  siteConfig.links.linkedIn,
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
