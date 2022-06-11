<template>
  <div class="flex flex-col h-screen">
    <div class="bg-gray-100 flex-auto">
      <div class="flex justify-center mt-16">
        <div class="w-2/5 border bg-white">
          <div class="my-12 text-center">
            <h2 class="text-4xl font-bold">さんぷるログイン</h2>
            <BaseAlert v-if="isShow" alert-title="" alert-text="IDか、パスワードが間違っています" />
            <p class="my-4">
              <span class="font-semibold">ID</span>と <span class="font-semibold">パスワード</span>を入力してください。
            </p>
            <form @submit.prevent="handleSubmit">
              <div class="mb-2">
                <input v-model="id" placeholder="ID" class="text-xl w-3/5 p-3 border rounded" />
              </div>
              <div class="mb-2">
                <input
                  v-model="password"
                  type="password"
                  class="text-xl w-3/5 p-3 border rounded"
                  placeholder="パスワード"
                />
              </div>
              <LoginButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
