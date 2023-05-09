import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder, IProduct } from 'types/types'
import { products } from './app'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  res.status(200).json(products)
}
