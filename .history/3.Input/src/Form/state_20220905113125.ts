import { atom, selector, atomFamily, selectorFamily } from "recoil";
import dataModel from "../metadata/dataModel.json";


export const history: Array<{
	undo: () => void,
  }> = [];

  
export const DataModel = atom({
	key: "dataModel",
	default: dataModel,
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

const viewModel = {}
export const viewModelById = atomFamily<any, string>({
	key:"viewModelById",
	effects:id=>[
		({setSelf})=>{
			setSelf(viewModel[id]);
		}
	]
});