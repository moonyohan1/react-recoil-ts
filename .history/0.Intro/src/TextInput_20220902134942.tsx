import { useRecoilState } from "recoil";
import { textState } from "state";

export function TextInput() {
    console.log("==render TextInput===")
    const [text, setText] = useRecoilState(textState);
  
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