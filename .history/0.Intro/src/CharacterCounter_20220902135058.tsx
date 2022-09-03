import CharacterCount from './CharacterCount';
import { TextInput } from './TextInput';

export default function CharacterCounter() {
  console.log("==Render CharacterCoutner===")
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }
  
  