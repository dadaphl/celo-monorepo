import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

import { SIMPLEX_URI } from 'src/config'
import { CURRENCY_ENUM } from 'src/geth/consts'
import { LocalCurrencyCode } from 'src/localCurrency/consts'
import { navigate } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import { navigateToURI } from 'src/utils/linking'

export const openMoonpay = (currencyCode: LocalCurrencyCode, currencyToBuy: CURRENCY_ENUM) => {
  navigate(Screens.MoonPay, {
    localAmount: 0,
    currencyCode,
    currencyToBuy,
  })
}

export const openSimplex = (account: string | null) => {
  navigateToURI(`${SIMPLEX_URI}?address=${account}`)
}

export const openRamp = (account: string | null) => {
  new RampInstantSDK({
    hostAppName: 'your dApp',
    hostLogoUrl: 'https://yourdapp.com/yourlogo.png',
    swapAmount: '150000000000000000000', // 150 ETH in wei
    swapAsset: 'ETH',
    userAddress: 'user blockchain address',
  })
    .on('*', (event: any) => console.log(event))
    .show()
}
