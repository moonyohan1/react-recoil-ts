
import { useCallback } from 'react';
import { useRecoilSnapshot, useRecoilState, useRecoilValue } from 'recoil';
import { controlState, DataModel, DataModelByPropId } from 'state';


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
	const [value2, setValue2] = useRecoilState(DataModelByPropId(pid));

	console.log(value2);

	const onChange = useCallback((e)=>{
		setValue2(e.target.value);
	}, [setValue2])

	return <Input onChange={onChange} value = {value}></Input>
  }