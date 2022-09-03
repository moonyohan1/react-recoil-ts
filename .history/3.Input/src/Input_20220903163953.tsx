
import {controlState} from 'state'
import { useRecoilValue } from 'recoil';

export const Input = ({title}) => {
	const value = useRecoilValue(controlState("cust"));
	console.log(value)
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input className="form-control">{value}</input>
				</div>
			</div>
		</div>
	);
  };

  