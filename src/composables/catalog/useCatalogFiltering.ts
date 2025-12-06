import { computed, ref } from 'vue'
import type { Categories, Category, Product } from '@/types/types'
import productsData from '@/data/products.json'
import { useCartStore } from '@/stores/cart'

const categories = ref<Category[]>([
  { id: 'all', name: 'Todo' },
  { id: 'pallets', name: 'Paletas' },
  { id: 'ice-cream', name: 'Helados' },
  { id: 'waters', name: 'Aguas' },
  { id: 'others', name: 'Otros' },
])

export function useCatalogFiltering() {
  const products = ref<Product[]>(productsData as Product[])
  const cartStore = useCartStore()
  const categoryActive = ref<Categories>('all')
  const selectedProductIds = ref<Set<Product>>(new Set(cartStore.cart))
  const search = ref('')

  const productsFiltered = computed(() => {
    let filtered = products.value

    if (categoryActive.value !== 'all') {
      filtered = filtered.filter((product) => product.category === categoryActive.value)
    }

    const query = search.value.toLocaleLowerCase().trim()

    if (!query) {
      return filtered
    }

    return (filtered = filtered.filter((product) =>
      product.name.toLocaleLowerCase().includes(query),
    ))
  })

  const handleSelectCategory = (id: Categories) => {
    categoryActive.value = id
  }

  const toggleProductSelection = (product: Product) => {
    if (selectedProductIds.value.has(product)) {
      selectedProductIds.value.delete(product)
    } else {
      selectedProductIds.value.add(product)
    }
  }

  const clearFilters = () => {
    categoryActive.value = 'all'
    search.value = ''
    selectedProductIds.value.clear()
  }

  const addProductsToCart = () => {
    cartStore.addToCart(Array.from(selectedProductIds.value))
  }

  return {
    productsFiltered,
    handleSelectCategory,
    toggleProductSelection,
    categories,
    categoryActive,
    selectedProductIds,
    search,
    clearFilters,
    addProductsToCart,
  }
}
