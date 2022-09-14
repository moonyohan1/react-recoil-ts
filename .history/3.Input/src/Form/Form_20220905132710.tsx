import { Field } from "Field/Field";
import { modelByKey } from './state';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';

export const Form = ({modelKey}: any) => {
	const model = useRecoilValue(modelByKey(modelKey));

	return (
		<ul
			style={{ maxWidth: "750px" }}
			className={"wrapper-form wrapper-form-state-1"}
			data-render-type={"list"}
		>
			{Object.entries(model).map((item) => {
				return <Field key={item[0]} pid={item[0]}></Field>;
			})}
		</ul>
	);
};
