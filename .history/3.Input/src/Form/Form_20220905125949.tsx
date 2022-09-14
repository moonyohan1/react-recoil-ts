import { Field } from "Field/Field";
import { DataModel, viewModelByDataType } from './state';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';

export const Form = ({}: any) => {
	const dataModel = useRecoilValue(DataModel);

	return (
		<ul
			style={{ maxWidth: "750px" }}
			className={"wrapper-form wrapper-form-state-1"}
			data-render-type={"list"}
		>
			{Object.entries(dataModel).map((item) => {
				return <Field key={item[0]} pid={item[0]}></Field>;
			})}
		</ul>
	);
};
