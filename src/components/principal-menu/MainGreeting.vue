<script lang="ts" setup>
const greeting = {
  morning: 'buenos días',
  afternoon: 'buenas tardes',
  nights: 'buenas noches',
}

const hours = new Date().getHours()
const currentGreeting = (() => {
  if (hours >= 5 && hours < 12) {
    return greeting.morning
  }
  if (hours >= 12 && hours < 19) {
    return greeting.afternoon
  }
  return greeting.nights
})()
</script>

<template>
  <h3 class="font-bold text-3xl mb-6">¡Hola, {{ currentGreeting }}!</h3>
</template>
