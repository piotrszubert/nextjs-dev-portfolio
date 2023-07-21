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
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedIn: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "example@gmail.com"
  },
  projects: [
    {title: 'Opimage', description: 'High performance web images optimization library', url: 'opimage.io'},
    {title: 'Portfolio', description: 'Highest quality personal portfolio template', url: 'portfolio.io'},
    {title: 'FontTurbo', description: 'Modern way to manage fonts on website', url: 'font.turbo'},
    {title: 'ColorTurbo', description: 'Modern, fastest way to create color pallettes', url: 'color.turbo'},
  ],
  pages: {
    home: {
      heading: 'Software developer, founder and investor.',
      subheading: 'I am [Your Name], a software developer and entrepreneur with a passion for innovation and investment. As the founder and CEO of [Your Company Name], I strive to create groundbreaking technologies and opportunities that drive the future of technology and empower individuals to achieve their financial goals'
    },
    about: {
      heading: '',
      subheading: ''
    },
    projects: {
      heading: '',
      subheading: ''
    },
    blog: {
      heading: '',
      subheading: ''
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