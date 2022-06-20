import { LogoutOptions, RedirectLoginOptions, User } from "@auth0/auth0-spa-js";
import { Ref } from "vue";

export interface Auth0Plugin {
  isAuthenticated: Ref<boolean>;
  isLoading: Ref<boolean>;
  user: User;
  handleCallback: () => Promise<void>;
  login: (options?: RedirectLoginOptions) => void;
  logout: (options?: LogoutOptions) => void;
  getAccessToken: () => Promise<null | string>;
}
