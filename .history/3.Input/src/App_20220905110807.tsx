import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

import { Form } from "Form/Form";
import {Reset} from 'Item/Reest';
import {Undo} from 'Item/Undo';
import {Clean} from 'Item/Clean';
import './css/index.css'

function App() {
	const [, updateState] = React.useState("");
 	const forceUpdate = React.useCallback(() => updateState("1"), []);

	return (
	  <div className="App">
		<RecoilRoot>
		  	<Form></Form>
			<Reset></Reset>
			<Undo></Undo>
			<Clean forceUpdate={forceUpdate}></Clean>
		</RecoilRoot>
	  </div>
	);
}

export default App;
