import { Auth0Plugin } from '@/interfaces/auth0-plugin';
import createAuth0Client, {
  Auth0Client,
  Auth0ClientOptions,
  GetTokenSilentlyOptions,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from '@auth0/auth0-spa-js';
import { ref } from 'vue';

const auth0Client = ref<Auth0Client>();
const isAuthenticated = ref(false);
const isLoading = ref(true);
const user = ref<User>();
const error = ref<Error>();

const createClient = async (options: Auth0ClientOptions): Promise<void> => {
  auth0Client.value = await createAuth0Client({
    domain: options.domain,
    client_id: options.client_id,
    redirect_uri: options.redirect_uri,
  });

  const params = new URLSearchParams(window.location.search);
  const hasError = params.has('error');
  const hasCode = params.has('code');
  const hasState = params.has('state');

  if (hasError) {
    error.value = new Error(params.get('error_description') || 'error completing login process');

    isLoading.value = false;

    return;
  }

  try {
    if (hasCode && hasState) {
      const result = await auth0Client.value.handleRedirectCallback();
      let url = '/';

      if (result.appState && result.appState.targetUrl) {
        url = result.appState.targetUrl;
      }
    }
  } catch (e) {
    error.value = e;
  } finally {
    isAuthenticated.value = await auth0Client.value.isAuthenticated();
    user.value = await auth0Client.value.getUser();
    error.value = null;
    isLoading.value = false;
  }
};

const handleCallback = async (): Promise<void> => {
  isLoading.value = true;
  try {
    await auth0Client.value.handleRedirectCallback();
    user.value = await auth0Client.value.getUser();
    isAuthenticated.value = true;
  } catch (e) {
    error.value = e;
  } finally {
    isLoading.value = false;
  }
};

const login = (options?: RedirectLoginOptions): void => {
  auth0Client.value.loginWithRedirect(options);
};

const logout = (options?: LogoutOptions): void => {
  auth0Client.value.logout(options);
};

const getAccessToken = async (options?: GetTokenSilentlyOptions): Promise<null | string> => {
  return (await auth0Client.value.getTokenSilently(options)) as string;
};

const authPlugin: Auth0Plugin = {
  isAuthenticated,
  isLoading,
  user,

  login,
  logout,
  getAccessToken,
  handleCallback,
};

export const Auth0 = {
  authPlugin,
  createClient,
};
