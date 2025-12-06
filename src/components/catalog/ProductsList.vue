<script lang="ts" setup>
import type { Product } from '@/types/types'
import ProductCard from './ProductCard.vue'
import UiContainer from '../ui/UiContainer.vue'

const { products } = defineProps<{
  products: Product[]
  selectedProductIds: Set<Product>
  toggleProductSelection: (product: Product) => void
}>()
</script>

<template>
  <UiContainer>
    <p v-if="products.length < 1" class="mt-44 text-center font-medium text-lg">
      No hay resultados
    </p>
    <main class="columns-2 md:grid md:grid-cols-4 pt-44 gap-5 space-y-5 pb-24">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product
        :isSelected="selectedProductIds.has(product)"
        @click="toggleProductSelection(product)"
      />
    </main>
  </UiContainer>
</template>
<style scoped></style>
