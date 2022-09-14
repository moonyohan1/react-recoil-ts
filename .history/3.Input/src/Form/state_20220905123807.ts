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

const viewModel = {
	code: {code:"", name:""},
	input: ""
}
export const viewModelByDataType = atomFamily<any, string>({
	key:"viewModelByDataType",
	effects:dataType=>[
		({setSelf})=>{
			setSelf(viewModel[dataType]);
		}
	]
});