import { atom, selector, atomFamily, selectorFamily } from "recoil";
import { modelByKey } from "Form/state";

export const controlState = selectorFamily<any, {modelKey:string, pid: string}>({
	key: "controlSelector",
	get:
		({modelKey, pid}) =>
		({ get }) => {
			return get(modelByKey(modelKey))[pid];
		},
	set:
		({modelKey, pid}) =>
		({ set }, newValue) => {
			set(modelByKey(modelKey), (prevState) => {
				return { ...prevState, [pid]: newValue };
			});
		},
});



export const controlSelectorState  = atom({
	key:"controlSelectorState",
	default:controlState
})

export const buttonState = atom({
   key: "button",
    default:selectorFamily({
        key:"button/selector",
        get:model_key=>({get})=>{
            get(modelByKey(model_key));
        }
    })
})