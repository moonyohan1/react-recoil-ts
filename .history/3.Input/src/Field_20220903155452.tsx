import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'
import { Title } from "Title";
import { Input } from "Input";

export const Field = () => {
	return (
		<li>
			<Title title= {"test"}></Title>
			<Input title={"test"} value = {"tt"}></Input>
		</li>
	);
  };

  