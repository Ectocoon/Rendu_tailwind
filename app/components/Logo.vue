<template>
  <!-- Figma : Inter Black (900), hauteur de ligne 20px, espacement 10 %.
       Mobile : 32px dans 184px de large. lg : 40px dans un bloc de 230×30.
       Le bloc reste haut de 30px sur mobile (Figma : 20) : avec bg-clip-text, le dégradé
       ne couvre que la boîte, et les majuscules de 32px (~23px) seraient rognées dans 20px.
       Comme le logo est centré dans le bandeau, ça ne change pas sa position. -->
  <NuxtLink
    to="/"
    class="flex items-center w-[184px] h-[30px] whitespace-nowrap font-inter text-[32px] leading-5 font-black tracking-[0.1em] bg-gradient-to-r from-logo-start to-logo-end bg-clip-text text-transparent lg:w-[230px] lg:text-[40px]"
  >
    TAILWIND
  </NuxtLink>
</template>
