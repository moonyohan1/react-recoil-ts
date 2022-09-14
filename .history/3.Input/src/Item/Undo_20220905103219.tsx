
import { useResetRecoilState } from 'recoil';
import { history } from 'Form/state';

 
export const Undo = () => {
	const UndoValue = ()=>{
		history.pop()?.undo();
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={UndoValue}>Undo</button>
			</div>
		</div>
	);
  };