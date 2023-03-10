<script setup lang="ts">
useHead({
  title: 'Conor Walton',
  link: [
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  ],
});
</script>

<template>
  <div class="font-mono grid place-items-center h-screen">
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl font-bold">
        Conor Walton
      </h1>
      <UiLink href="mailto:contact@conorw.me">
        <div class="i-mdi:email" /> contact@conorw.me
      </UiLink>
      <UiLink href="https://github.com/waltoncon">
        <div class="i-mdi:github" /> waltoncon
      </UiLink>
      <h2 class="text-2xl font-bold mt-3">
        Projects
      </h2>
      <UiLink href="https://cew.sh">
        <div class="i-mdi:link" /> Utilities
      </UiLink>
    </div>
  </div>
</template>

