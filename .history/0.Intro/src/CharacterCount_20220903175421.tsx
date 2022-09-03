import React from 'react';
import {useRecoilValue, selector, atom, useRecoilState} from 'recoil';
import {charCountState,elementPositionStateFamily} from './state';

export default function CharacterCount() {
    const count = useRecoilValue(charCountState); 
    const position = useRecoilValue(elementPositionStateFamily(0));

    console.log(position);
    return <>
      Character Count: {count}
    </>;
  }
