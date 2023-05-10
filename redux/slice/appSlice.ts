import { products } from './../../pages/api/app';

import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { IDeleteOrderProduct, IFilter, IInitialState, ISetFilter, Lang,} from '../../types/store'
import { IOrder, IProduct } from 'types/types'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IInitialState = {
  lang: 'en-gb',
  orders: [],
  products: [],
  filter: {
    specification: '',
    type: ''
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload
    },
    setFilter: (state, action: PayloadAction<ISetFilter>) => {
      const {filter, filterType} = action.payload
      if(filterType === 'type') state.filter.type = filter
      if(filterType === "specification") state.filter.specification = filter
    },
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    },
    setOrders: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload)
    },
    deleteOrderProduct: (state, action: PayloadAction<IDeleteOrderProduct>) => {
      const {orderId, productId} = action.payload
      const currentState = current(state)
      const order = currentState.orders.filter(o => o.id === orderId)[0]
      const mappedOrder = {...order, products: order.products.filter(o => o.id !== productId)}
      state.orders = [...currentState.orders.filter(i => i.id !== orderId), mappedOrder]
    },
    
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.products,
        ...action.payload.orders,
      };
    },
  },
})

export const {
  setLang,
  setFilter,
  setProducts,
  deleteProduct,
  setOrders,
  deleteOrderProduct,
} = appSlice.actions
export default appSlice.reducer
