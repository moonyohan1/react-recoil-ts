import { atom, selector, atomFamily, selectorFamily } from "recoil";
import dataModel from "./metadata/dataModel.json";

export const DataModel = atom({
	key: "dataModel",
	default: dataModel,
	effects: [
		({onSet}) => {
			onSet((newValue, oldValue) => {
				console.log("==oldValue", oldValue);
				console.log("==newValue", newValue);
			});
		},
	  ],
});

export const DataModelByPropId = atomFamily<any, string>({
	key: "DataModelByPropId",
	default: (pid)=> DataModel[pid],
	effects: [
		({onSet}) => {
			onSet((newValue, oldValue) => {
				console.log("==oldValue", oldValue);
				console.log("==newValue", newValue);
			});
		},
	  ],
});

export const controlState = selectorFamily<any, string>({
	key: "controlSelector",
	get:
		(pid) =>
		({ get }) => {
			return get(DataModel)[pid];
		},
	set:
		(pid) =>
		({ set }, newValue) => {
			set(DataModel, (prevState) => {
				return { ...prevState, [pid]: newValue };
			});
		},
});
