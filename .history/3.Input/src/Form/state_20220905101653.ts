import { atom, selector, atomFamily, selectorFamily } from "recoil";
import dataModel from "../metadata/dataModel.json";


export const DataModel = atom({
	key: "dataModel",
	default: dataModel,
	effects: [
		({setSelf, onSet}) => {
			onSet((newValue, oldValue) => {
				console.log("==oldValue", oldValue);
				console.log("==newValue", newValue);
			});
		},
	  ],
});
