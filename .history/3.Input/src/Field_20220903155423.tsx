import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'
import { Title } from "Title";
import { Input } from "Input";

export const Field = () => {
	return (
		<li>
			<Title></Title>
			<Input></Input>
		</li>
	);
  };

  