<template>
  <!-- 20px de haut bordure comprise, texte sur 16px. Figma met la bordure à
       l'intérieur : 10px de marge - 1px de bordure = 9px de padding en CSS -->
  <span class="inline-flex items-center h-5 px-[9px] border border-tag-border rounded-[4px] text-xs leading-4 text-title bg-card">
    <slot />
  </span>
</template>
