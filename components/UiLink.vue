<template>
  <a class="link"><slot /></a>
</template>

<style scoped lang="postcss">
.link {
    @apply
        px-3
        py-2
        h-8
        w-full
        rounded-md
        flex
        flex-row
        justify-start
        items-center
        gap-2
        leading-none

        text-white

        bg-gradient-to-br
        from-indigo-600
        to-indigo-700

        active:from-indigo-700
        active:to-indigo-800

        hover:ring-3
        hover:ring-indigo-200

        focus:outline-none
        focus:ring-3
        focus:ring-indigo-200
    ;
}
</style>
