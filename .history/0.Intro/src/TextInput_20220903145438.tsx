import { useRecoilState, useSetRecoilState } from "recoil";
import { textState, toggleState } from "state";

export function TextInput() {
    const [text, setText] = useRecoilState(textState);
    const [setSelector] = useSetRecoilState(toggleState)
  
    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }