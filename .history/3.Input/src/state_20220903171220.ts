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
});


export const dataModelState = atomFamily({
  key: "dataModelState",
  default: selectorFamily({
    key: "dataModelState/selector",
    get: (id:string)=>({get})=>{
      return get(DataModel)[id]
    },
    set:(id:string)=>({set})=>{
      debugger
    }
  })
})