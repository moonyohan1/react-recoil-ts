
import { useResetRecoilState } from 'recoil';
import { modelByKey } from 'Form/state';

 
export const Save = ({modelKey}) => {
	const value = useRecoilValue(modelByKey(modelKey))
	const onClick = () => {
		window.alert(value);
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={onClick}>Save</button>
			</div>
		</div>
	);
  };