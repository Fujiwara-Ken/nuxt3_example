import { sampleUser } from "~~/interfaces";

export const getUserSample = async () => {
  const { data: response } = await useFetch<sampleUser[]>(() => "https://jsonplaceholder.typicode.com/users");
  console.log("responseData", response.value);
  return response.value;
};

export const filterUserSample = async (word: string) => {
  const { data: res, refresh } = await useFetch<sampleUser[]>(() => "https://jsonplaceholder.typicode.com/users", {
    transform: (res: sampleUser[]) => {
      return res.filter(
        (item: sampleUser) =>
          String(item.id) === word || item.name.match(word) || item.username.match(word) || item.email.match(word)
      );
    },
  });
  console.log(res);
  await refresh();
  console.log("transformData", res.value);
  return res.value;
};
