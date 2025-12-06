<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{
  title: string
  value: string
  icon: Component
  bgColor?: string
  textColor?: string
}>()
</script>

<template>
  <article
    class="rounded-2xl px-2 py-4 shadow-2xs"
    :style="{ backgroundColor: bgColor || '#fff', color: textColor || '#000' }"
  >
    <p class="font-medium flex items-center gap-1 mb-2.5"><component :is="icon" /> {{ title }}</p>
    <p class="text-3xl font-bold">{{ value }}</p>
  </article>
</template>
