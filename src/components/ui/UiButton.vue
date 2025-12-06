<script lang="ts" setup>
defineEmits(['click'])
</script>

<template>
  <button
    type="button"
    class="bg-secondary w-full py-3 rounded-xl font-medium text-lg block text-center text-white"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
