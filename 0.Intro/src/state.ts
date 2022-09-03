import { atom, atomFamily, selector } from "recoil";

export const charCountState = selector({
	key: "charCountState", // unique ID (with respect to other atoms/selectors)
	get: ({ get }) => {
    console.log("==get Count state===")
		const text = get(textState);

		return text.length;
	},
});

export const textState = atom({
	key: "textState", // unique ID (with respect to other atoms/selectors)
	default: "", // default value (aka initial value)
});


export const textState2 = atom({
	key: "textState2", // unique ID (with respect to other atoms/selectors)
	default: textState, // default value (aka initial value)
});



export const elementPositionStateFamily = atomFamily({
	key: 'ElementPosition',
	default: [0, 0],
  });