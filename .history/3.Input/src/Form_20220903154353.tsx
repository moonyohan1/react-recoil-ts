import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'

export const Form = ({children}) => {
	return (
		<ul 
			style={{'maxWidth': '750px'}} 
			className={'wrapper-form wrapper-form-state-1'} 
			data-render-type={'list'}>
      {...children}
		</ul>
	);
  };

  