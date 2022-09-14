
import { useCallback } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { controlState, DataModel, controlStateAtom, dataModelState } from 'state';


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
	//const [value, setValue] = useRecoilState(controlState(pid));
	const dataModelState = useRecoilValue(DataModel);
	const [value, setValue] = useRecoilState(controlStateAtom(pid));
	const onChange = useCallback((e)=>{
		setValue(e.target.value);
	}, [setValue])

	console.log(dataModelState);

	return <Input onChange={onChange} value = {value}></Input>
  }