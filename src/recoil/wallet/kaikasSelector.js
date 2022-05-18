import { selector } from "recoil";
import { kaikasAtom } from "./atom";

const kaiaksSelector = selector({
  key: "kaikasAtom",
  get: () => {
    return kaikasAtom.value;
  },
  set: async ({ get, set }) => {},
});
