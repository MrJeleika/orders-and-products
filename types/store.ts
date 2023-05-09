import { IOrder, IProduct } from "./types"


export type Lang = 'en-gb' | 'ru'


export interface IFilter{
  type: string;
  specification: string;
}

export interface ISetFilter{
  filterType: 'type' | 'specification'
  filter: string
}


export interface IInitialState{
  lang: Lang
  orders: IOrder[]
  products: IProduct[]
  filter: IFilter
}