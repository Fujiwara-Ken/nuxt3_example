<template>
  <div>
    <button type="button" class="text-xl w-3/5 bg-teal-500 text-white py-2 rounded" @click="userLogin">ログイン</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { currentUser, login } = useAuth();

const userLogin = async () => {
  await login();

  await router.push("/top");
};
</script>
