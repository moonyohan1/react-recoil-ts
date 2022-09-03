import React from 'react';
import {useRecoilValue, selector, atom, useRecoilState} from 'recoil';
import {charCountState} from './state';

export default function CharacterCount() {
    const count = useRecoilValue(charCountState);
    return <>
      Character Count: {count}
    </>;
  }