import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: null,
});

export const selectedChatAtom = atom({
  key: "selectedChatAtom",
  default: "",
});

export const chatsAtom = atom({
  key: "chatsAtom",
  default: [],
});
export const fetchAgainAtom = atom({
  key: "fetchAgainAtom",
  default: false,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: [],
});
