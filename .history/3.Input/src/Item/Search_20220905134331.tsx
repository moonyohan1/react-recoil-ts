
import { useRecoilValue } from 'recoil';
import { modelByKey } from 'Form/state';


export const Search = ({modelKey}) => {
	const value = useRecoilValue(modelByKey(modelKey))
	const onClick = () => {
		window.alert(JSON.stringify(value));
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={onClick}>Search</button>
			</div>
		</div>
	);
  };
