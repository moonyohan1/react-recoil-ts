
import { useResetRecoilState } from 'recoil';
import { history } from 'Form/state';

 
export const Clean = () => {
	const App = document.getElementById('app');

	if(App) {
		App.innerHTML = '';
	}
};