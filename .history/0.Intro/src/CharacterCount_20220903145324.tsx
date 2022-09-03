import React from 'react';
import {useRecoilValue, selector, atom, useRecoilState} from 'recoil';
import {charCountState, mySelector} from './state';

export default function CharacterCount() {
    const count = useRecoilValue(charCountState);
    
    const a =  useRecoilValue(mySelector);

    console.log(a);

    return <>
      Character Count: {count}
    </>;
  }