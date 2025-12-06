<script setup lang="ts">
import FilterCategories from '@/components/catalog/FilterCategories.vue'
import HomeHeader from '@/components/view/HomeHeader.vue'
import ViewHeader from '@/components/view/ViewHeader.vue'
import ProductsList from '@/components/catalog/ProductsList.vue'
import { useCatalogFiltering } from '@/composables/catalog/useCatalogFiltering'
import UiContainer from '@/components/ui/UiContainer.vue'
import IconClear from '@/components/icons/IconClear.vue'
import InputIcon from '@/components/ui/InputIcon.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import UiButton from '@/components/ui/UiButton.vue'
const {
  handleSelectCategory,
  productsFiltered,
  toggleProductSelection,
  categories,
  categoryActive,
  selectedProductIds,
  search,
  clearFilters,
  addProductsToCart,
} = useCatalogFiltering()
</script>

<template>
  <ViewHeader>
    <HomeHeader :selectedLength="selectedProductIds.size" @click="addProductsToCart" />
    <UiContainer>
      <div class="grid grid-cols-[1fr_auto] items-center gap-2 mb-2.5">
        <InputIcon
          v-model="search"
          :icon="IconSearch"
          :name="search"
          placeholder="Buscar productos..."
        />
        <button class="" @click="clearFilters">
          <IconClear />
        </button>
      </div>
    </UiContainer>
    <FilterCategories :categories :categoryActive :handleSelectCategory />
  </ViewHeader>
  <ProductsList :products="productsFiltered" :toggleProductSelection :selectedProductIds />
  <div v-if="selectedProductIds.size > 0" class="fixed bottom-4 left-0 w-full">
    <UiContainer>
      <RouterLink to="/cart-payment">
        <UiButton @click="addProductsToCart"> Proceder al pago </UiButton>
      </RouterLink>
    </UiContainer>
  </div>
</template>
