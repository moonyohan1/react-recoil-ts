import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'
import { Field } from "Field";

export const Form = ({children}) => {
	return (
		<ul 
			style={{'maxWidth': '750px'}} 
			className={'wrapper-form wrapper-form-state-1'} 
			data-render-type={'list'}>
      
			<Field>
				
        </Field>
		</ul>
	);
  };

  