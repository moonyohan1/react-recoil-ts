import { atom, selector, atomFamily, selectorFamily } from "recoil";
import { DataModel } from "Form/state";

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



export const controlSelectorState  = atom({
	key:"controlSelectorState",
	default:selectorFamily({
		key: "controlSelectorState/selector",
		get:(id:string)=>({get})=>{
			return get(DataModel)[id];
		},
		set:(id:string)=>({set}, newValue)=>{
			set(DataModel, (prevState)=>{
				return { ...prevState, [id]: newValue };
			});
		}
		
	})
})