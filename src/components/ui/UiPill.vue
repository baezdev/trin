<script lang="ts" setup>
const { active } = defineProps<{ active?: boolean }>()
</script>

<template>
  <span
    class="font-medium px-2.5 py-1 rounded-full select-none transition-all duration-200 transform shadow-2xs"
    :class="active ? 'bg-primary-thin text-primary scale-105' : 'bg-white scale-100'"
  >
    <slot></slot>
  </span>
</template>
