import { MenuEntry } from 'iridiumfinance'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Parallel farming',
    icon: 'HamburgerIcon',
    items: [
      {
        label: 'Platinum Finance',
        href: 'https://platinumfinance.app/',
      },
    ],
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Community pools',
  //   icon: 'GroupsIcon',
  //   href: '/community',
  // } ,
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickChart',
        href: 'https://quickchart.app/token/0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C',
      },
      // {
      //  label: 'PolyChart',
      //  href: 'https://app.polychart.io/explorer/polygon/0x8c79d1ccb5e5ea4df5e0ff14b59a305f2808ac93',
      // },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C-polygon',
      },
      {
        label: 'PooCoin',
        href: 'https://polygon.poocoin.app/tokens/0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/polydaedalus',
      // },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@platinum-finance/s/iridium-finance/',
      },
      {
        label: 'Vfat.tools',
        href: 'https://vfat.tools/polygon/iridiumfinance/',
      }
    ],
  },
]

export default config
