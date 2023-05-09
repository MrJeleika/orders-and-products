export interface IOrder{
  id: number;
  title: string;
  date: string;
  description: string;
  products: () => IProduct[];
}



export interface IProduct{
  id: number;
  serialNumber: number;
  isNew: number
  photo: string
  type: string
  title: string
  specification: string
  guarantee: {
    start: string;
    end: string;
  }
  price: {value: number, symbol: string, isDefault: number}[]
  order: number
  date: string
}


