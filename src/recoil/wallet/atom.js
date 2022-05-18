import { atom } from "recoil";

export const kaikasAtom = atom({
  key: "kaikasAtom",
  default: {
    address: "",
    network: 0,
    isUnlocked: false,
  },
});

export const metamaskAtom = atom({
  key: "metamaskAtom",
  default: {
    address: "",
    network: 0,
    isUnlocked: false,
  },
});
