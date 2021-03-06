export const user = {
  avatar: '/static/images/avatars/avatar.png',
  jobTitle: 'Fullstack Developer',
  name: 'Jagadeesh Palaniappan'
};

export const navMap = {
  '/app/stocks': 'Stocks',
  '/app/mystocks': 'My Stocks',
  '/app/research': 'Research',
  '/app/divTracker': 'DivTracker',
  '/app/settings': 'Settings',
  '/app/account': 'Account'
};

export const items = [
  {
    href: '/app/mystocks',
    icon: 'Stocks',
    title: 'My Stocks'
  },
  {
    href: '/app/research',
    icon: 'Research',
    title: 'Research'
  },
  {
    href: '/app/divTracker',
    icon: 'DivTracker',
    title: 'DivTracker'
  },
  {
    href: '/app/product',
    icon: 'Research',
    title: 'Research'
  }
];

export const moreItems = [];

export const bottomItems = [
  {
    href: '/app/settings',
    icon: 'Settings',
    title: 'Settings',
    badge: true
  },
  {
    href: '/app/my',
    img: 'http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg',
    menus: [
      { href: '/app/my/profile', title: 'My Profile' },
      { href: '/app/my/preferences', title: 'My Preferences' },
      { href: '/login', title: 'Logout' }
    ],
    title: 'Jagadeesh Palaniappan',
    hideTitle: true,
    badge: true
  }
];
