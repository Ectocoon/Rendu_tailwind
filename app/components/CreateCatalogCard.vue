<template>
  <BaseCard>
    <!-- Bloc texte (98px, prend la place restante) : titre (24) + 8 d'écart + description (40) -->
    <div class="flex-1 px-2">
      <CardHeading>Create catalog</CardHeading>
      <CardDescription class="mt-2">
        Create new catalog to add products and generate content.
      </CardDescription>
    </div>

    <!-- w-full + justify-center : le bouton prend toute la largeur de la carte -->
    <PrimaryButton class="w-full justify-center mt-3">
      <PlusIcon />
      Create catalog
    </PrimaryButton>
  </BaseCard>
</template>
