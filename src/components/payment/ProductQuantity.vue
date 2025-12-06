<script lang="ts" setup>
import type { Product } from '@/types/types'

defineProps<{
  product: Product
}>()

defineEmits(['increase', 'subtract'])
</script>

<template>
  <li
    class="grid grid-cols-[auto_2fr_1fr] py-4 items-center gap-x-2.5 border-b last:border-0 border-gray-400/25"
  >
    <img
      :src="`/images/${product.image}`"
      alt=""
      class="aspect-square object-cover rounded-xl w-20"
    />
    <div>
      <h3 class="font-semibold">{{ product.name }}</h3>
      <p class="text-gray-500 font-semibold text-lg">${{ product.price }}</p>
    </div>
    <div class="grid grid-cols-[32px_32px_32px] place-items-center gap-1">
      <button
        @click="$emit('subtract')"
        class="rounded-full aspect-square bg-gray-300 flex justify-center items-center w-full"
      >
        -
      </button>
      <p class="font-medium text-lg flex items-center justify-center w-full">
        {{ product.amount }}
      </p>
      <button
        @click="$emit('increase')"
        class="rounded-full aspect-square w-full bg-gray-300 flex justify-center items-center"
      >
        +
      </button>
    </div>
  </li>
</template>
