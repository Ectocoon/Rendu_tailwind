<script setup>
// Données d'exemple (plus tard elles pourront venir d'une API)
const catalogs = [
  {
    id: 1,
    title: 'Christmas 2024',
    tags: ['Sneakers', 'boots'],
    createdAt: '12.27.2024',
    productCount: 254,
  },
  {
    id: 2,
    title: 'A very big title for a catalog with many thing',
    tags: ['Sneakers', 'boots', 'Belt', 'Socks', 'Hats', 'Gloves', 'Scarves'],
    createdAt: '12.27.2024',
    productCount: 254,
  },
]
</script>

<template>
  <!-- 1 colonne sur téléphone, 2 sur tablette (md), 3 sur grand écran (xl). 10px entre les cartes -->
  <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 px-4 pt-10 pb-[30px]">
    <CreateCatalogCard />
    <CatalogCard
      v-for="catalog in catalogs"
      :key="catalog.id"
      :title="catalog.title"
      :tags="catalog.tags"
      :created-at="catalog.createdAt"
      :product-count="catalog.productCount"
    />
  </section>
</template>
