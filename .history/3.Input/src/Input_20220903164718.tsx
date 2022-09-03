
import { useRecoilValue } from 'recoil';
import {controlState} from 'state'


export const Input = () => {
	const value = useRecoilValue(controlState("cust"));
	const onChange = ()=>{
		
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

  