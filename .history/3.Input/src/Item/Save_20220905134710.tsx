
import { useRecoilValue } from 'recoil';
import { modelByKey } from 'Form/state';
import React from 'react';

 
export const Save = React.memo(({modelKey}:any) => {
	const value = useRecoilValue(modelByKey(modelKey))
	const onClick = () => {
		window.alert(JSON.stringify(value));
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={onClick}>Save</button>
			</div>
		</div>
	);
  });