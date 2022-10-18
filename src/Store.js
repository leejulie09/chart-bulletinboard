import { atom } from "recoil";

const foldAndSpreadState = atom({
  key: "foldAndSpreadState",
  default: false,
});

export default foldAndSpreadState;
