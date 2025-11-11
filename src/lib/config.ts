export const siteConfig = {
  title: 'Priyanshu Tiwari',
  description:
    "I'm a backend heavy full-stack developer and history buff, currently working as a Senior Software Engineer at HackerRank.",
  author: 'Priyanshu Tiwari',
  designation: 'Senior Software Engineer',
  baseURL: 'https://ahampriyanshu.com',
  subPath: '',
  githubUsername: 'ahampriyanshu',
  githubRepo: 'ahampriyanshu.github.io',
  twitterHandle: 'ahampriyanshu',
  lang: 'en',
  timezone: 'Asia/Kolkata',
  theme: 'dark',
  analytics: {
    ga_id: 'G-VSNH6EH1RX',
    gtag_id: 'GTM-M4FTVQ3'
  },
  contact: {
    github: 'https://github.com/ahampriyanshu',
    linkedin: 'https://linkedin.com/in/ahampriyanshu',
    resume: 'https://resume.ahampriyanshu.com',
    twitter: 'https://twitter.com/ahampriyanshu',
    email: 'mailto:vayampriyanshu@gmail.com'
  },
  navItems: [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Categories', url: '/categories' },
    { name: 'Tags', url: '/tags' },
    { name: 'Archives', url: '/archives' }
  ],
  footerLinks: {
    projects: [
      { name: 'o1on', url: 'https://github.com/ahampriyanshu/o1on' },
      { name: 'Zmail', url: 'https://portfolio.ahampriyanshu.com' },
      { name: 'Algo 101', url: 'https://github.com/ahampriyanshu/algo-ds-101' },
      {
        name: 'Lok Sabha EDA',
        url: 'https://www.kaggle.com/datasets/ahampriyanshu/lok-sabha'
      }
    ],
    blogs: [
      { name: 'Stocks', url: 'https://github.com/ahampriyanshu' },
      { name: 'Insurance', url: 'https://github.com/ahampriyanshu' },
      { name: 'Mutual Funds', url: 'https://github.com/ahampriyanshu' },
      { name: 'System Design', url: 'https://github.com/ahampriyanshu' }
    ],
    personal: [
      { name: 'SuperTrips', url: 'https://supertrip.ahampriyanshu.com' },
      { name: '9AM Playlist', url: 'https://open.spotify.com/playlist/3igzxaCc80f1IYbE4qord3' },
      {
        name: '9PM Playlist',
        url: 'https://www.youtube.com/playlist?list=PLDbMS6hxjvT7XcInwLhPPfzrvUeDtH0tA'
      },
      { name: 'Bookshelf', url: 'https://www.goodreads.com/ahampriyanshu' }
    ]
  }
};

export type SiteConfig = typeof siteConfig;

export function getSiteUrl(): string {
  return siteConfig.baseURL + siteConfig.subPath;
}
