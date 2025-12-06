<script lang="ts" setup>
import type { Category, Categories } from '@/types/types'
import UiPill from '../ui/UiPill.vue'

const { categoryActive, categories, handleSelectCategory } = defineProps<{
  categories: Category[]
  categoryActive: string
  handleSelectCategory: (categoryId: Categories) => void
}>()
</script>

<template>
  <section
    class="flex gap-2 overflow-x-auto overflow-y-hidden px-4 py-0.5 [scrollbar-width:none] [-ms-overflow-style:none]"
  >
    <UiPill
      v-for="category in categories"
      :key="category.id"
      :active="category.id === categoryActive"
      @click="handleSelectCategory(category.id as Categories)"
    >
      {{ category.name }}
    </UiPill>
  </section>
</template>
