import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

import {ColorPicker} from './ColorPicker';
import {Grid} from './Grid';
import {Stats} from './Form';
import './css/common.css';

function App() {
	return (
	  <div className="App">
		<RecoilRoot>
		  <Form>
			<Field>

			</Field>
		</Form>

		</RecoilRoot>
	  </div>
	);
}

export default App;
