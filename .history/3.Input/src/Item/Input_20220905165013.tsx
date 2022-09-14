import { useCallback } from "react";
import { useRecoilSnapshot, useRecoilState, useRecoilValue } from "recoil";
import { controlState, doublePositionFamily, stateByPid } from "./state";

export const Input = ({ value, onChange }) => {
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input
						className="form-control "
						placeholder={value}
						value={value}
						onChange={onChange}
					></input>
				</div>
			</div>
		</div>
	);
};

export const ItemPresenter = ({ pid, modelKey }) => {
	// const [value, setValue] = useRecoilState(
	// 	controlState({ modelKey: modelKey, pid: pid })
	// );

	const [value,setValue] = useRecoilState(doublePositionFamily({ modelKey: modelKey, pid: pid }))
	

	// const controlSelector = useRecoilValue(controlSelectorState);
	// const [value, setValue] = useRecoilState(controlSelector(pid));

	const onChange = useCallback(
		(e) => {
			setValue(e.target.value);
		},
		[setValue]
	);

	return <Input onChange={onChange} value={value}></Input>;
};
