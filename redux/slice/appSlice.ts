import { products } from './../../pages/api/app';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilter, IInitialState, ISetFilter, Lang,} from '../../types/store'
import { IProduct } from 'types/types'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IInitialState = {
  lang: 'en-gb',
  orders: [],
  products: [],
  filter: {
    specification: '',
    type: ''
  }
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
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload)
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
  deleteProduct
} = appSlice.actions
export default appSlice.reducer
