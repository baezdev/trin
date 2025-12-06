<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue'
</script>

<template>
  <article
    class="bg-white shadow-2xs px-3.5 py-4 rounded-2xl grid grid-cols-[auto_1fr_auto] gap-4 items-end border border-gray-400/25"
  >
    <img
      src="/images/sale.webp"
      alt="Imagen de halado, con monedas"
      class="rounded-xl w-20 aspect-square object-cover"
    />

    <p class="flex flex-col text-lg font-semibold">
      Historial de Ventas
      <span class="text-base font-normal">Ver transacciones pasadas</span>
    </p>

    <IconArrow />
  </article>
</template>
