import { atom, selector } from "recoil";

export const charCountState = selector({
	key: "charCountState", // unique ID (with respect to other atoms/selectors)
	get: ({ get, getCallback }) => {
    console.log("==get Count state===")
		const text = get(textState);
    getCallback(()=>()=>console.log("sdfsfd"));

		return text.length;
	},
});

export const textState = atom({
	key: "textState", // unique ID (with respect to other atoms/selectors)
	default: "", // default value (aka initial value)
});
