<template>
  <!-- Mobile : bandeau logo en haut, contenu en dessous (colonne).
       À partir de lg (1024px) : barre latérale à gauche (ligne). -->
  <div class="flex flex-col lg:flex-row min-h-screen">
    <NuxtRouteAnnouncer />
    <Sidebar />

    <MainContent>
      <PageHeader />
      <CatalogGrid />
    </MainContent>
  </div>
</template>
