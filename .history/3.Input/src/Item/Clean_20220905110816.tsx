
import { useResetRecoilState } from 'recoil';
import { history } from 'Form/state';

 
export const Clean = ({forceUpdate}) => {
	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={forceUpdate}>Clean</button>
			</div>
		</div>
	);
};