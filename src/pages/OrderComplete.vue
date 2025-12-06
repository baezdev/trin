<script setup lang="ts">
import AnimateCheck from '@/components/icons/AnimateCheck.vue'
import UiButton from '@/components/ui/UiButton.vue'
import UiContainer from '@/components/ui/UiContainer.vue'
</script>

<template>
  <UiContainer>
    <main class="grid grid-rows-[1fr_auto] place-content-center h-dvh">
      <div class="mt-20">
        <div class="w-2/5 mx-auto mb-3.5">
          <AnimateCheck />
        </div>
        <h1 class="text-4xl font-semibold text-center">¡Orden Completada!</h1>
        <span
          class="bg-primary-thin px-7 py-2.5 text-lg font-medium rounded-lg mt-6 flex justify-center w-fit mx-auto"
        >
          Número de Orden: #123
        </span>
      </div>
      <RouterLink to="/" class="pb-4 block">
        <UiButton> Ir al inicio </UiButton>
      </RouterLink>
    </main>
  </UiContainer>
</template>
