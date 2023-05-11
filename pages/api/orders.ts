import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder } from 'types/types'
import {orders} from './app'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IOrder[]>
) {
  res.status(200).json(orders)
}
