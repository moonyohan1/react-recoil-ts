
import { useCallback } from 'react';
import { useResetRecoilState } from 'recoil';
import { controlState, DataModel } from 'state';


export const Reset = () => {
	const resetValue = useResetRecoilState(DataModel);

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={resetValue}>Reset</button>
			</div>
		</div>
	);
  };
