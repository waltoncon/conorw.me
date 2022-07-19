<template>
    <div class="font-mono grid place-items-center h-screen">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-3xl font-bold">
                Conor Walton
            </h1>
            <Link href="mailto:contact@conorw.me">
                <div class="i-mdi:email" /> contact@conorw.me
            </Link>
            <Link href="https://github.com/waltoncon">
                <div class="i-mdi:github" /> waltoncon
            </Link>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@unocss/reset/tailwind.css';
</script>
