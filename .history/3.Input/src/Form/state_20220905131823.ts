import { atom, selector, atomFamily, selectorFamily } from "recoil";
import model from "../metadata/dataModel.json";


export const history: Array<{
	undo: () => void,
  }> = [];

  
export const Model = atom({
	key: "Model",
	default: model,
	effects: [
		({setSelf, onSet}) => {
			onSet((newValue, oldValue) => {
				history.push({
					undo: () => {
						setSelf(oldValue);
					},
				});

				console.log("==oldValue", oldValue);
				console.log("==newValue", newValue);
			});

			return ()=>{
				//cleanup handler
			}
		},
	  ],
});


export const modelByKey = atomFamily<any, string>({
	key: "modelByKey",
	effects: (key) => [
		({ setSelf }) => {
			setSelf(model[key]);
		},
	],
});