import {atom} from "recoil";
import Item from "../types/Item";

export const itemsStateAtom = atom({
    key: "itemsStateAtom",
    default: [] as Item[]
});
