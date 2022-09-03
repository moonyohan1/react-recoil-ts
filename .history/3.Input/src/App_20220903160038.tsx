import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

import { Form } from "Form";
import './css/index.css'

function App() {
	return (
	  <div className="App">
		<RecoilRoot>
		  	<Form>
			</Form>

		</RecoilRoot>
	  </div>
	);
}

export default App;
