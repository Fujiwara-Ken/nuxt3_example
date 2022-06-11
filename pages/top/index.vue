<template>
  <div>
    <Header />
    <h1>トップページ</h1>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <BaseBlock
            v-for="item in blockItems"
            :key="item.to"
            :category="item.category"
            :title="item.title"
            :explain="item.explain"
            :link="item.link"
            :to="item.to"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const blockItems = [
  {
    category: "ブロック1",
    title: "ブロック１",
    explain: "ブロック１",
    link: "ブロック１",
    to: "#",
  },
  {
    category: "ブロック1",
    title: "ブロック１",
    explain: "ブロック１",
    link: "ブロック１",
    to: "#",
  },
  {
    category: "ブロック1",
    title: "ブロック１",
    explain: "ブロック１",
    link: "ブロック１",
    to: "#",
  },
];
</script>
