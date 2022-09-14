import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

import { Form } from "Form/Form";
import {Search} from 'Item/Search';
import {Save} from 'Item/Save';
import './css/index.css'

function App() {
	return (
	  <div className="App">
		<RecoilRoot>
			<div>
				<Form modelKey={'searchModel'}></Form>
				<Search modelKey={'searchModel'}></Search>
			</div>
			<div>
				<Form modelKey={'dataModel'}></Form>
				<Save modelKey={'dataModel'}></Save>
			</div>
		</RecoilRoot>
	  </div>
	);
}

export default App;
