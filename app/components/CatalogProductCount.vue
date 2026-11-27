<script setup>
defineProps({
  count: { type: Number, default: 0 },
})
</script>

<template>
  <!-- Ligne de 24px, texte "details bold" : Inter 500, 12px / 16px -->
  <p class="flex items-center h-6 font-inter text-xs leading-4 font-medium text-details">
    {{ count }} products
  </p>
</template>
