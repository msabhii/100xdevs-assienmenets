import axios from "axios";
import { atom, atomFamily, selectorFamily } from "recoil";

export const userInputAtom = atom({
  key: "userInputAtom",
  default: "",
});
export const userAtomFamily = atomFamily({
  key: "userAtomFamily",
  default: selectorFamily({
    key: "userSelectorFamily",
    get: (userName) => async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${userName}`);
        return res.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  }),
});
