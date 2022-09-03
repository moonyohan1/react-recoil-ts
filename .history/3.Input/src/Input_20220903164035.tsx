
import {controlState} from 'state'
import { useRecoilValue } from 'recoil';

export const Input = ({value}) => {
	const value = useRecoilValue(controlState("cust"));
	console.log(value)
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input className="form-control " placeholder={value}>{value}</input>
				</div>
			</div>
		</div>
	);
  };

  