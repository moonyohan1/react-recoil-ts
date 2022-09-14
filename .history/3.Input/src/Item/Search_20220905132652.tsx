
import { useResetRecoilState } from 'recoil';
import { modelByKey } from 'Form/state';


export const Reset = () => {
	const resetValue = useResetRecoilState(modelByKey("dataModel"));

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={resetValue}>Reset</button>
			</div>
		</div>
	);
  };
