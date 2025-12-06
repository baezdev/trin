<script setup lang="ts">
import IconMoney from '../icons/IconMoney.vue'
import IconSale from '../icons/IconSale.vue'
import StatCard from './StatCard.vue'
</script>

<template>
  <section class="mt-6">
    <p class="font-semibold text-xl mb-3">Resumen del Día</p>
    <div class="grid grid-cols-2 gap-3">
      <StatCard :icon="IconSale" title="Ventas de hoy" value="25" />
      <StatCard
        bg-color="#d1f2d9"
        text-color="#1b5e20"
        :icon="IconMoney"
        title="Total del Día"
        value="$320.00"
      />
    </div>
  </section>
</template>
