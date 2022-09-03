import { useRecoilState, useSetRecoilState } from "recoil";
import { textState, toggleState } from "state";

export function TextInput() {
    const [text, setText] = useRecoilState(textState);
    const [value, setSelector] = useRecoilState(toggleState)
  
    const onChange = (event) => {
      setText(event.target.value);
      setSelector(value ? false : true);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }