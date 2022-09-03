import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'

export const Field = ({children}) => {
	return (
		<li>{...children}</li>
	);
  };

  