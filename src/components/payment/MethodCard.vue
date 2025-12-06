<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{ icon: Component; text: string; isActive?: boolean }>()
defineEmits(['select'])
</script>

<template>
  <button
    class="shadow-2xs px-4 rounded-2xl aspect-video flex items-center flex-col justify-center gap-1 transition-all"
    :class="isActive ? 'bg-primary-thin ring-2 ring-primary text-primary' : 'bg-white'"
    @click="$emit('select')"
  >
    <span class="transition-all">
      <component :is="icon"></component>
    </span>
    <span class="font-semibold text-lg transition-all"> {{ text }} </span>
  </button>
</template>
