
import { useCallback } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import {controlState, DataModel} from 'state'


export const Input = ({value, onChange}) => {
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input className="form-control " placeholder={value} value= {value} onChange={onChange}></input>
				</div>
			</div>
		</div>
	);
  };

  export const ItemPresenter = ({pid}) =>{
	const [value, setValue] = useRecoilState(controlState(pid));
	const onChange = useCallback((e)=>{
		setValue(e.target.value);
	}, [setValue])

	const dataModel = useRecoilValue(DataModel);
	console.log(dataModel)

	return <Input onChange={onChange} value = {value}></Input>
  }