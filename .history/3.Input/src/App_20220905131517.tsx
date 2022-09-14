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
import './css/index.css'

function App() {
	return (
	  <div className="App">
		<RecoilRoot>
			<Form modelKey={'searchModel'}></Form>
		  	<Form modelKey={'dataModel'}></Form>
			<Reset></Reset>
			<Undo></Undo>
		</RecoilRoot>
	  </div>
	);
}

export default App;
