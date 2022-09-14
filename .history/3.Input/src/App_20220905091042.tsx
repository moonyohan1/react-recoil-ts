import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

import { Form } from "Form";
import {Reset} from 'Reest';
import './css/index.css'

function App() {
	return (
	  <div className="App">
		<RecoilRoot>
		  	<Form></Form>
			<Reset></Reset>
		</RecoilRoot>
	  </div>
	);
}

export default App;
