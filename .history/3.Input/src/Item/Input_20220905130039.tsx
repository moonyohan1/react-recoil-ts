
import { useCallback } from 'react';
import { useRecoilSnapshot, useRecoilState, useRecoilValue } from 'recoil';
import { controlState, controlSelectorState } from './state';


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

	// const controlSelector = useRecoilValue(controlSelectorState);
	// const [value, setValue] = useRecoilState(controlSelector(pid));

	const onChange = useCallback((e)=>{
		setValue(e.target.value);
	}, [setValue])

	return <Input onChange={onChange} value = {value}></Input>
  }