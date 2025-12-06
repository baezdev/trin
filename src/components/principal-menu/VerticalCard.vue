<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue'
</script>

<template>
  <article class="bg-white shadow-2xs px-3.5 block py-4 rounded-2xl border border-gray-400/25">
    <img
      src="/images/ice-cream-sale.webp"
      alt="Imagen de halado, iniciar venta"
      class="rounded-xl aspect-video object-cover"
    />
    <div class="grid grid-cols-[1fr_auto] mt-4 items-end">
      <p class="flex flex-col text-2xl font-semibold">
        Nueva Venta
        <span class="text-base font-normal">Iniciar un nuevo pedido</span>
      </p>
      <IconArrow />
    </div>
  </article>
</template>
