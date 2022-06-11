import type { Ref } from "vue";

const login = (currentUser: Ref<boolean>) => () => {
  currentUser.value = true;

  const to = useRoute().redirectedFrom?.path || "/";
  useRouter().push(to);
};

const logout = (currentUser: Ref<boolean>) => () => {
  currentUser.value = false;
};

export const useAuth = () => {
  const currentUser = useState("currentUser", () => false);
  return {
    currentUser,
    login: login(currentUser),
    logout: logout(currentUser),
  };
};
