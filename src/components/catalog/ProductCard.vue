<script lang="ts" setup>
import type { Product } from '@/types/types'
import IconAddCart from '../icons/IconAddCart.vue'

interface Props {
  product: Product
  isSelected: boolean
}

const { product, isSelected } = defineProps<Props>()

defineEmits(['click'])
</script>

<template>
  <article
    class="rounded-2xl overflow-hidden transition-all select-none ring-[3.5px] cursor-pointer shadow-2xs"
    :class="isSelected ? 'ring-primary/60 scale-[101%]' : 'ring-transparent'"
    @click="$emit('click')"
  >
    <img
      :src="`/images/${product.image}`"
      :alt="`Imagen de ${product.name}`"
      class="w-full object-cover aspect-9/10"
      width="240px"
    />
    <div class="px-2.5 py-2 bg-white">
      <h3 class="font-semibold text-lg">{{ product.name }}</h3>
      <div class="grid grid-cols-[1fr_auto] items-center gap-2">
        <p class="text-gray-500 font-semibold text-lg">${{ product.price }}</p>
        <button class="bg-primary-thin text-primary p-2 rounded-full">
          <IconAddCart />
        </button>
      </div>
    </div>
  </article>
</template>
