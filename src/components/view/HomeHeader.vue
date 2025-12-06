<script setup lang="ts">
import UiContainer from '@/components/ui/UiContainer.vue'
import IconCart from '@/components/icons/IconCart.vue'
import { RouterLink } from 'vue-router'
import IconHome from '../icons/IconHome.vue'

defineProps<{
  selectedLength: number
}>()
defineEmits(['click'])
</script>

<template>
  <UiContainer>
    <div class="flex justify-between items-center py-4">
      <RouterLink to="/">
        <IconHome />
      </RouterLink>
      <h2 class="font-semibold text-xl">Catálogo</h2>
      <RouterLink to="/cart-payment" class="relative flex">
        <span
          v-if="selectedLength > 0"
          @click="$emit('click')"
          class="absolute -left-6 top-0 font-medium bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          {{ selectedLength }}
        </span>
        <IconCart />
      </RouterLink>
    </div>
  </UiContainer>
</template>
