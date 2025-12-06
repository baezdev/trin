<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{ modelValue: string; icon: Component; name: string; placeholder: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <label
    :for="name"
    class="flex bg-white px-2.5 items-center gap-1.5 py-2 rounded-full transition-shadow focus-within:ring-2 focus-within:ring-primary/60 shadow-2xs"
  >
    <span>
      <component :is="icon" />
    </span>
    <input
      :value="modelValue"
      @input="handleInput"
      type="text"
      :name
      :placeholder
      class="outline-none font-medium text-lg w-full"
    />
  </label>
</template>
