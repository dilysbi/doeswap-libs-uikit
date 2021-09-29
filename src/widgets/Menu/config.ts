// import iconHot from "../../assets/images/tag/icon-hot.svg"

/**
 * label: string
 * icon: svg
 * href: https || /path
 * calloutClass: 'rainbow' || className
 * initialOpenState: true || false
 * items: array sample parent
 * att: attach => text || icon.png
 */

export const links = [
  // {
  //   label: "POOLS",
  //   icon: "PoolIcon",
  //   href: "#",
  //   att: "SOON",
  //   initialOpenState: true,
  //   calloutClass: 'rainbow',
  // },
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
    calloutClass: 'rainbow',
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    initialOpenState: true,
    items: [ 
      {
        label: "Exchange",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/pool",
      },
    ],
  },
  {
    label: "Earning",
    icon: "EarningIcon",
    att: "SOON",
    href: "#",
  },
  {
    label: "NFT Marketplace",
    icon: "NftIcon",
    att: "iconHot",
    href: "#",
  },
  {
    label: "HORA Gallery",
    icon: "GalleryIcon",
    att: "SOON",
    href: "#",
  },
  {
    label: "Sport NFT",
    icon: "SpotIcon",
    href: "#",
  },
  {
    label: "Launchpad",
    icon: "LaunchpadIcon",
    att: "SOON",
    href: "#",
  },
  {
    label: "Gamification",
    icon: "GamificationIcon",
    att: "iconHot",
    href: "#",
  }, 
  {
    label: "ETH2.0",
    icon: "ETH2Icon",
    att: "SOON",
    href: "#",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    att: "SOON",
    href: "#", 
  },
  {
    label: "Contact",
    icon: "GroupsIcon",
    items: [ 
      {
        label: "Twitter",
        href: "#",
      },
      {
        label: "Medium",
        href: "#",
      },
      {
        label: "Telegram",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/pancakeswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/pancakeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/pancakeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancakeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/pancakeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/pancakeswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancakeSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/PancakeSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/pancakeswap",
  },
];

export const MENU_HEIGHT = 64; 
export const MENU_ENTRY_HEIGHT = 55; // Height of item
export const SIDEBAR_WIDTH_FULL = 210; // Width of sidebar
export const SIDEBAR_WIDTH_REDUCED = 56; // 56 Width of siderbar collapse mini only icon
