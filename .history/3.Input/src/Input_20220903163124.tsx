
import {controlState} from 'state'
import { useRecoilValue } from 'recoil';

export const Input = ({title}) => {
	const 
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input className="form-control " placeholder={title}></input>
				</div>
			</div>
		</div>
	);
  };

  