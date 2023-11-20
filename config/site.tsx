export type SiteConfig = typeof siteConfig

type AccentColor = {
  [colorName: string]: {
    accentTextClass: string;
    accentBorderClass: string;
  };
};

export const siteConfig = {
  name: "Next.js",
  description:
    "Description.",
  links: {
    twitter: "#",
    github: "https://github.com/piotrszubert",
    linkedIn: "https://linkedin.com/in/piotr-szubert-312506201/",
    instagram: "#",
    email: "piotr.szubert777@gmail.com"
  },
  projects: [
    {title: 'Dot. Landing page', description: 'Example landing page for AI SaaS company', url: 'landing-2-of-30.vercel.app'},
    {title: 'Update. Changelog site', description: 'Example Neo-Brutalism style changelog site', url: 'update-changelog-template.vercel.app'},
    {title: 'TalkSquare. Podcast site', description: 'Example podcast site created with Next.js and Tailwind', url: 'talk-square.vercel.app'},
  ],
  pages: {
    home: {
      heading: 'Software developer, investor and car enthusiast.',
      subheading: `Hey there, I'm a software developer with a passion for programming, innovation and investment.`
    },
    about: {
      heading: '',
      subheading: ''
    },
    projects: {
      heading: 'Web Development Creations.',
      subheading: 'I have worked on tons of little projects over the years but these are the ones that I am most proud of. All of listed below are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved. Most of these projects are frontend side, but recently i started learning backend technologies to become fullstack developer, so stay up to date!'
    },
    blog: {
      heading: 'Exploring the World of Tech and Development',
      subheading: 'All of my thoughts on programming, technologies, hardware, and more, collected in chronological order.'
    }
  },
  accentColor: {
    colorVariant: 'purple',
    colorVariants: {
      lime: {
        accentTextClass: 'text-lime-400',
        accentBorderClass: 'border-lime-400',
      },
      green: {
        accentTextClass: 'text-green-400',
        accentBorderClass: 'border-green-400',
      },
      blue: {
        accentTextClass: 'text-blue-400',
        accentBorderClass: 'border-blue-400',
      },
      indigo: {
        accentTextClass: 'text-indigo-400',
        accentBorderClass: 'border-indigo-400',
      },
      orange: {
        accentTextClass: 'text-orange-400',
        accentBorderClass: 'border-orange-400',
      },
      violet: {
        accentTextClass: 'text-violet-400',
        accentBorderClass: 'border-violet-400',
      },
      red: {
        accentTextClass: 'text-red-400',
        accentBorderClass: 'border-red-400',
      },
      amber: {
        accentTextClass: 'text-amber-400',
        accentBorderClass: 'border-amber-400',
      },
      yellow: {
        accentTextClass: 'text-yellow-400',
        accentBorderClass: 'border-yellow-400',
      },
      emerald: {
        accentTextClass: 'text-emerald-400',
        accentBorderClass: 'border-emerald-400',
      },
      teal: {
        accentTextClass: 'text-teal-400',
        accentBorderClass: 'border-teal-400',
      },
      cyan: {
        accentTextClass: 'text-cyan-400',
        accentBorderClass: 'border-cyan-400',
      },
      purple: {
        accentTextClass: 'text-purple-400',
        accentBorderClass: 'border-purple-400',
      },
      fuchsia: {
        accentTextClass: 'text-fuchsia-400',
        accentBorderClass: 'border-fuchsia-400',
      },
      pink: {
        accentTextClass: 'text-pink-400',
        accentBorderClass: 'border-pink-400',
      },
      rose: {
        accentTextClass: 'text-rose-400',
        accentBorderClass: 'border-rose-400',
      },
    } as AccentColor,
  }
}