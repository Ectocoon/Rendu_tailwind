<script setup>
const props = defineProps({
  title: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  createdAt: { type: String, required: true },
  productCount: { type: Number, default: 0 },
})

// On affiche au maximum 4 étiquettes, le reste devient "+N"
const MAX_TAGS = 4
const visibleTags = computed(() => props.tags.slice(0, MAX_TAGS))
const hiddenCount = computed(() => props.tags.length - visibleTags.value.length)
</script>

<template>
  <!-- Contenu de 150px : bloc titre (58) + 12 d'écart + bloc du bas (80) -->
  <BaseCard class="gap-3">
    <!-- Bloc titre : prend la place restante (58px), titre et bouton centrés verticalement -->
    <div class="flex-1 flex items-center gap-2 min-h-[58px]">
      <CatalogTitle class="flex-1">{{ title }}</CatalogTitle>
      <MoreButton />
    </div>

    <!-- Bloc du bas (80px) : étiquettes (20) + 12 d'écart + infos (48) -->
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <CatalogTag v-for="tag in visibleTags" :key="tag">{{ tag }}</CatalogTag>
        <CatalogTag v-if="hiddenCount > 0">+{{ hiddenCount }}</CatalogTag>
      </div>

      <div>
        <CatalogDate :date="createdAt" />
        <CatalogProductCount :count="productCount" />
      </div>
    </div>
  </BaseCard>
</template>
