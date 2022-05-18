import { selector } from "recoil";
import { kaikasAtom } from "./atom";

export const kaiaksSelector = selector({
  key: "kaikasAtom",
  get: ({ get }) => {
    return get(kaikasAtom);
  },
});
