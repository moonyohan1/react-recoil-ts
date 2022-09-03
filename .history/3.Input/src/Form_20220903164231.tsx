import { Field } from "Field";
import { useRecoilValue } from "recoil";
import { controlState } from "state";

export const Form = ({}:any) => {

	const value = useRecoilValue(controlState("cust"));
	return (
		<ul 
			style={{'maxWidth': '750px'}} 
			className={'wrapper-form wrapper-form-state-1'} 
			data-render-type={'list'}>
      
			<Field></Field>
		</ul>
	);
};

  