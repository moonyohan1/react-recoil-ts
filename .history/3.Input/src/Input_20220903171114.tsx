
import { useRecoilState, useRecoilValue } from 'recoil';
import {controlState, dataModelState, DataModel} from 'state'


export const Input = () => {
	// const [value, setValue] = useRecoilState(controlState("cust"));
	// const onChange = (e)=>{
	// 	setValue(e.target.value);
	// }
	const dataModel = useRecoilValue(DataModel);
	const [value, setValue] = useRecoilState(dataModelState("cust"));
	const onChange = (e)=>{
		setValue(e.target.value);
	}

	console.log(dataModel);
	
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

  