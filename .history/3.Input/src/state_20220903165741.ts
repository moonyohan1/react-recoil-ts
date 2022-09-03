import { atom, selector, atomFamily, selectorFamily } from "recoil";
import dataModel from "./metadata/dataModel.json";

export const DataModel = atom({
	key: "dataModel",
	default: dataModel[0],
});

export const controlState = selectorFamily<any, string>({
	key: "controlSelector",
	get:
		(pid) =>
		({ get }) => {
      debugger
			return get(DataModel)[pid];
		},
  set:
		(pid) =>
		({ set }, value) => {
      var  a =  {...DataModel, [pid] : value};
      debugger
			return set(DataModel,a);
		},
});
