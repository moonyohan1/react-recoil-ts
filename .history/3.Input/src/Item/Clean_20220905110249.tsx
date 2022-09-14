
import { useResetRecoilState } from 'recoil';
import { history } from 'Form/state';

 
export const Clean = () => {
	
	const Clean = () =>{
		const App = document.getElementById('app');

		if(App) {
			App.innerHTML = '';
		}
	}

	return (
		<div className="control-set">
			<div className="control">
				<button id="new" className="btn btn-default" onClick={Clean}>Undo</button>
			</div>
		</div>
	);
};