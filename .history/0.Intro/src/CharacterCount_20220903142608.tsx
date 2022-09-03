import React from 'react';
import {useRecoilValue, selector, atom, useRecoilState} from 'recoil';
import {charCountState, textState2} from './state';

export default function CharacterCount() {
    console.log("==render CountCount===")
    const count = useRecoilValue(charCountState);
    const [test, setTest] = useRecoilState(textState2);

    
    const onClick = () =>{
    setTest(3);
    }
  
    return <>
      Character Count: {count}
      <button onClick={onClick}>click</button>
    </>;
  }