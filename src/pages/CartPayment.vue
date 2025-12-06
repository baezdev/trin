<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconArrow from '@/components/icons/IconArrow.vue'
import IconCard from '@/components/icons/IconCard.vue'
import IconCash from '@/components/icons/IconCash.vue'
import MethodCard from '@/components/payment/MethodCard.vue'
import PaymentDetails from '@/components/payment/PaymentDetails.vue'
import ProductQuantity from '@/components/payment/ProductQuantity.vue'
import UiContainer from '@/components/ui/UiContainer.vue'
import ViewHeader from '@/components/view/ViewHeader.vue'
import { useCart } from '@/composables/payment/useCart'

const { cart, increaseQuantity, payMethod, subtractAmount } = useCart()
console.log(cart)
</script>

<template>
  <ViewHeader>
    <UiContainer>
      <div class="flex justify-between items-center py-4">
        <RouterLink to="/products-catalog" class="rotate-180">
          <IconArrow />
        </RouterLink>
        <h2 class="font-semibold text-xl">Orden y Pago</h2>
        <span class="w-6 h-6"> </span>
      </div>
    </UiContainer>
  </ViewHeader>
  <UiContainer>
    <section class="pt-20 pb-14">
      <h3 class="font-semibold text-xl mb-3">Resumen de Orden</h3>
      <ul class="bg-white shadow-2xs px-4 rounded-2xl">
        <ProductQuantity
          v-for="product in cart"
          :key="product.id"
          :product
          @increase="increaseQuantity(product.id)"
          @subtract="subtractAmount(product.id)"
        />
      </ul>
      <article class="mt-10">
        <h3 class="font-semibold text-xl mb-3">El cliente pagara con</h3>
        <div class="grid grid-cols-2 gap-5">
          <MethodCard
            :icon="IconCash"
            text="Efectivo"
            @select="payMethod = 'cash'"
            :is-active="payMethod === 'cash'"
          />
          <MethodCard
            :icon="IconCard"
            text="Tarjeta"
            @select="payMethod = 'card'"
            :is-active="payMethod === 'card'"
          />
        </div>
      </article>
      <article class="mt-10">
        <PaymentDetails :cart="cart" :pay-method="payMethod" />
      </article>
    </section>
  </UiContainer>
</template>
