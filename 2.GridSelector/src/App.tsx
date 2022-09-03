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
import {Stats} from './Stats';
import './css/index.css';

function App() {
	return (
	  <div className="App">
		<RecoilRoot>
		  <ColorPicker />
		  <Grid />
		  <Stats />
		</RecoilRoot>
	  </div>
	);
}

export default App;
