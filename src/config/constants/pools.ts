import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //  sousId: 1,
  //  tokenName: 'IRID',
  //  stakingTokenName: QuoteToken.PLATIN,
  //  stakingTokenAddress: '0x782eb3304F8b9adD877F13a5cA321f72c4AA9804',
  //  contractAddress: {
  //    137: '0x591f90B14Fed25ed50e56549fE78D208949C6c9C'
  //  },
  //  poolCategory: PoolCategory.COMMUNITY,
  //  projectLink: 'https://iridiumfinance.app/',
  //  harvest: true,
  //  tokenPerBlock: '0.0012',
  //  sortOrder: 1,
  //  isFinished: true, 
  //  tokenDecimals: 18,
  // },
  {
    sousId: 2,
    tokenName: 'WBTC',
    stakingTokenName: QuoteToken['IRID-PLATIN'],
    stakingTokenAddress: '0xD592bfB50ad10088A428F1a4e74213090fC4A6dC',
    contractAddress: {
      137: '0x563373d51Eb8e9F9074216763a39F3aD79597edd'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://iridiumfinance.app/',
    harvest: true,
    tokenPerBlock: '0.00000034',
    sortOrder: 1,
    isFinished: false, 
    tokenDecimals: 8,
  }
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
