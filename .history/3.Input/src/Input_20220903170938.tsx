
import { useRecoilState } from 'recoil';
import {controlState, dataModelState} from 'state'


export const Input = () => {
	// const [value, setValue] = useRecoilState(controlState("cust"));
	// const onChange = (e)=>{
	// 	setValue(e.target.value);
	// }
	const [value, setValue] = useRecoilState(dataModelState("cust"));
	const onChange = (e)=>{
		setValue(e.target.value);
	}
	
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input className="form-control " placeholder={value} value= {value} onChange={onChange}></input>
				</div>
			</div>
		</div>
	);
  };

  