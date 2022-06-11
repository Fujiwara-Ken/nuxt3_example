<template>
  <div class="p-4 lg:w-1/3">
    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ category }}</h2>
      <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{ title }}</h1>
      <p class="leading-relaxed mb-3">
        {{ explain }}
      </p>
      <NuxtLink class="text-green-500 inline-flex items-center" :href="to"
        >{{ link }}
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BaseBlockProps {
  category: string;
  title: string;
  explain: string;
  link: string;
  to: string;
}

const baseBlockProps = withDefaults(defineProps<BaseBlockProps>(), {
  category: "",
  title: "",
  explain: "",
  link: "",
  to: "",
});

const { category, title, explain, link, to } = toRefs(baseBlockProps);
</script>
