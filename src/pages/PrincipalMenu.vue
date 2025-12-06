<script setup lang="ts">
import LinksCards from '@/components/principal-menu/LinksCards.vue'
import MainGreeating from '@/components/principal-menu/MainGreeting.vue'
import PrincipalHeader from '@/components/principal-menu/PrincipalHeader.vue'
import ResumeStats from '@/components/principal-menu/ResumeStats.vue'
import UiContainer from '@/components/ui/UiContainer.vue'
</script>

<template>
  <PrincipalHeader />
  <UiContainer>
    <main class="pt-5 pb-10">
      <MainGreeating />
      <LinksCards />
      <ResumeStats />
    </main>
  </UiContainer>
</template>
