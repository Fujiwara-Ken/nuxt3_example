<template>
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <NuxtLink class="mr-5 hover:text-gray-900 cursor-pointer" :href="to"> {{ link }} </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
interface LinksProps {
  link: string;
  to: string;
}

const linksProps = withDefaults(defineProps<LinksProps>(), {
  link: "",
  to: "",
});

const { link, to } = toRefs(linksProps);
</script>
