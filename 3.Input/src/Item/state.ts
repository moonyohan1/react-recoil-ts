import { atom, selector, atomFamily, selectorFamily } from "recoil";
import { modelByKey } from "Form/state";
import { shallowEqual } from "react-redux";

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


export const stateByPid = atomFamily<any, {modelKey:string, pid: string}>({
	key: "modelByKey",
	effects: ({modelKey, pid}) => [
		({ setSelf, onSet }) => {
            debugger
			setSelf((modelByKey(modelKey))[pid]);

			// onSet((newValue, oldValue) => {
			// 	console.log(`==${key} newValue:`, newValue);
			// });
		},
	],
});

// export const controlSelectorState  = atom({
// 	key:"controlSelectorState",
// 	default:controlState
// })

// export const buttonState = atom({
//    key: "button",
//     default:selectorFamily({
//         key:"button/selector",
//         get:(model_key:string)=>({get})=>{
//             get(modelByKey(model_key));
//         }
//     })
// })