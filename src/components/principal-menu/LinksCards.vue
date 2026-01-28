<script setup lang="ts">
import { RouterLink } from 'vue-router'
import VerticalCard from './VerticalCard.vue'
import HorizontalCard from './HorizontalCard.vue'
</script>

<template>
  <section class="flex flex-col gap-4">
    <RouterLink to="/products-catalog">
      <VerticalCard />
    </RouterLink>
    <RouterLink to="">
      <HorizontalCard />
    </RouterLink>
  </section>
</template>
