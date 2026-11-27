<script setup>
defineProps({
  date: { type: String, required: true },
})
</script>

<template>
  <!-- Figma "detail" : Inter Regular (400), 12px / 16px, #81828C,
       centré dans une ligne de 24px. "Created on" et la date sont 2 textes séparés de 4px -->
  <p class="flex items-center gap-1 h-6 font-inter text-xs leading-4 font-normal text-description">
    <span>Created on</span>
    <span>{{ date }}</span>
  </p>
</template>
