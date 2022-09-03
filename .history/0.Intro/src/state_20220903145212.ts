import { atom, selector } from "recoil";

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



export const toggleState = atom({key: 'Toggle', default: false});
export const selectorA = selector({key: 'selectorA', get: ({get})=>{ return "A"}});
export const selectorB = selector({key: 'selectorB', get: ({get})=>{ return "B"}});

export const mySelector = selector({
  key: 'MySelector',
  get: ({get}) => {
    const toggle = get(toggleState);
    if (toggle) {
      return get(selectorA);
    } else {
      return get(selectorB);
    }
  },
});