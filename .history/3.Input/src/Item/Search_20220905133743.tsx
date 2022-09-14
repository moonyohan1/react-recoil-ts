
import { useResetRecoilState } from 'recoil';
import { modelByKey } from 'Form/state';


export const Search = ({modelKey}) => {
	const onClick = () => {
		window.alert(modelByKey(modelKey));
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={onClick}>Search</button>
			</div>
		</div>
	);
  };
