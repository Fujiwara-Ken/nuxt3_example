import { useAuth } from "@/composables/useAuth";

export default defineNuxtRouteMiddleware((to) => {
  console.log("auth.ts通過");
  const { currentUser } = useAuth();
  if (!currentUser.value && to.path !== "/") {
    const path = "/";
    return { path };
  }
});
