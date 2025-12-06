export interface Category {
  id: string
  name: string
}

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: Categories
  amount: number
}

export type Categories = 'all' | 'pallets' | 'ice-cream' | 'others' | 'waters'
