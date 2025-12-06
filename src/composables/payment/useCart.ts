import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'

export function useCart() {
  const cartStore = useCartStore()

  const payMethod = ref<'cash' | 'card'>('cash')

  const increaseQuantity = (productId: string) => {
    cartStore.increment(productId)
  }

  const subtractAmount = (productId: string) => {
    cartStore.decrement(productId)
  }

  const clearCart = () => {
    cartStore.clear()
  }

  return {
    cart: cartStore.cart,
    payMethod,
    increaseQuantity,
    subtractAmount,
    clearCart,
  }
}
