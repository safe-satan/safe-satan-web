import React from 'react'
import { Button } from '@material-ui/core'
import data from '../_tokenContract.json'

const BuyButton: React.FC = () => (
  <Button
    variant="outlined"
    style={{ color: '#fff', borderColor: '#fff' }}
    target="_blank"
    href={`https://exchange.pancakeswap.finance/#/swap?outputCurrency=${data.contract}`}
  >
    Buy on PancakeSwap
  </Button>
)

export default BuyButton
