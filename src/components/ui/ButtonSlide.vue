<script lang="ts" setup>
import { ref } from 'vue'
import ice from '@/assets/ice-cream.svg'

const slider = ref(null)
const sliderHandle = ref(null)

const initDrag = (e: TouchEvent | MouseEvent) => {
  console.log(e)
}
</script>

<template>
  <div>
    <div class="relative h-13 w-full">
      <div
        ref="slider"
        class="absolute inset-0 bg-gray-200 rounded-xl flex items-center justify-center w-full"
        @touchmove="initDrag"
      >
        <span class="text-gray-700 font-medium text-lg z-10 pointer-events-none">
          Desliza para finalizar venta
        </span>
        <span class="h-full w-full z-10 bg-secondary absolute left-0 rounded-xl"></span>
        <img
          :src="ice"
          class="absolute -left-4 h-20 z-20 pointer-events-none"
          draggable="false"
          @click="console.log(slider)"
        />
      </div>
    </div>
  </div>
</template>
