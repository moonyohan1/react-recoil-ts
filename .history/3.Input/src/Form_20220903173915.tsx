import { Field } from "Field";
import {DataModel} from 'state';
import { useRecoilValue } from 'recoil';


export const Form = ({}:any) => {
  const dataModel = useRecoilValue(DataModel);
	return (
		<ul 
			style={{'maxWidth': '750px'}} 
			className={'wrapper-form wrapper-form-state-1'} 
			data-render-type={'list'}>
      
			{Object.entries(dataModel).map(item=>{
        return <Field pid={item[0]}></Field>
      })}
		</ul>
	);
};

  