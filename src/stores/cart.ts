import type { Product } from '@/types/types'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Product[],
  }),

  getters: {
    total: (state) =>
      state.cart.reduce((total, current) => {
        return total + current.amount * current.price
      }, 0),
  },

  actions: {
    addToCart(products: Product[]) {
      if (products.length < 1) return

      this.cart = [...products]
    },

    increment(productId: string) {
      const product = this.cart.find((p) => p.id === productId)
      if (!product) return

      product.amount++
    },

    decrement(productId: string) {
      const product = this.cart.find((p) => p.id === productId)
      if (!product || product.amount === 1) return

      product.amount--
    },

    removeProduct(productId: string) {
      this.cart = this.cart.filter((p) => p.id !== productId)
    },

    clear() {
      this.cart = []
    },
  },
})
