import { atom, selector, atomFamily, selectorFamily } from "recoil";
import dataModel from "../metadata/dataModel.json";


export const history: Array<{
	undo: () => void,
  }> = [];

  
export const DataModel = atom({
	key: "dataModel",
	effects: [
		({setSelf, onSet}) => {
			setSelf(dataModel);
			onSet((newValue, oldValue) => {
				history.push({
					undo: () => {
					setSelf(oldValue);
					},
				});

				console.log("==oldValue", oldValue);
				console.log("==newValue", newValue);
			});
		},
	  ],
});
