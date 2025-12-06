<script lang="ts" setup>
import type { Product } from '@/types/types'
import { computed, ref } from 'vue'
import IconCash from '../icons/IconCash.vue'
import UiButton from '../ui/UiButton.vue'

const { cart } = defineProps<{
  cart: Product[]
  payMethod: 'cash' | 'card'
}>()

const received = ref('')
const receivedIsEmpty = computed(() => {
  return received.value === ''
})
const isInsufficient = computed(() => {
  return total.value > Number(received.value)
})
const total = computed(() => {
  return cart.reduce((total, current) => {
    return total + current.amount * current.price
  }, 0)
})

const change = computed(() => {
  if (total.value > Number(received.value)) return
  return Number(received.value) - total.value
})
</script>
<template>
  <h3 class="font-semibold text-xl mb-3">Detalles del Pago</h3>
  <div class="bg-white shadow-2xs p-4 rounded-2xl">
    <div v-if="payMethod === 'cash'" class="border-b border-gray-400/25 pb-4 mb-4">
      <label for="money-received" class="font-medium mb-1.5 block">Recibio del Cliente</label>
      <div
        class="grid grid-cols-[auto_1fr] bg-gray-100 rounded-md place-items-center px-1 focus-within:ring-2 focus-within:ring-primary/60"
      >
        <IconCash />
        <input
          v-model="received"
          value=""
          type="number"
          class="outline-0 py-2.5 font-medium text-lg w-full"
          placeholder="Ingrese la cantidad"
        />
      </div>
    </div>
    <ul class="flex flex-col gap-2">
      <li class="flex justify-between font-bold text-3xl py-2">
        Total
        <span>${{ total }}</span>
      </li>
      <template v-if="payMethod === 'cash'">
        <li class="flex justify-between font-medium text-2xl text-gray-500">
          Recibió
          <span>${{ !receivedIsEmpty ? received : 0 }}</span>
        </li>
        <li class="flex justify-between font-medium text-2xl text-gray-500 items-center">
          Cambio
          <span v-if="receivedIsEmpty">$0</span>
          <span v-else-if="!isInsufficient">{{ change }}</span>
          <span
            v-else-if="isInsufficient"
            class="text-base font-semibold text-red-700 text-right text-pretty"
          >
            El pago es menor que el total
          </span>
        </li>
      </template>
    </ul>
  </div>
  <RouterLink to="/order-complete" class="mt-10 block">
    <UiButton> Finalizar Ventar </UiButton>
  </RouterLink>
</template>
