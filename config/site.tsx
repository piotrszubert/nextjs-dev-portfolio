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
    email: "example@gmail.com"
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