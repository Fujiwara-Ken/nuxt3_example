export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp();
  if (!$auth.isAuthenticated.value) {
    return navigateTo("/login");
  }
});
