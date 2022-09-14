
import { useRecoilValue } from 'recoil';
import { modelByKey } from 'Form/state';
import { buttonState } from './state';
import React from 'react';

 
export const Save = ({modelKey}) => {
	const value = useRecoilValue(modelByKey(modelKey))
	const buttonStateSelector = useRecoilValue(buttonState)
	const buttonValue = useRecoilValue(buttonStateSelector(modelKey));
	const onClick = () => {
		console.log(buttonValue);
		window.alert(JSON.stringify(value));
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={onClick}>Save</button>
			</div>
		</div>
	);
  };