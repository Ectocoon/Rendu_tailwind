<template>
  <!-- Boîte blanche commune à toutes les cartes -->
  <!-- min-h 170px : toutes les cartes font 170px de haut dans Figma,
       même seules sur leur ligne (mobile) où la grille ne les étire plus.
       p-[9px] : Figma met la bordure à l'intérieur (10px depuis le bord),
       en CSS elle s'ajoute au padding → 1px de bordure + 9px = 10px -->
  <div class="flex flex-col min-h-[170px] bg-card border border-card-border rounded-lg p-[9px] font-inter">
    <slot />
  </div>
</template>
