import { useRecoilState, useSetRecoilState } from "recoil";
import { textState, toggleState2 } from "state";

export function TextInput() {
    const [text, setText] = useRecoilState(textState);
    const [value, setSelector] = useRecoilState(toggleState2)
  
    const onChange = (event) => {
      setText(event.target.value);
      setSelector("sdf");
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }