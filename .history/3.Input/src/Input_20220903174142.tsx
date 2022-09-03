import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { controlState, DataModel } from "state";

export const Input = React.memo(({ pid }: any) => {
	const [value, setValue] = useRecoilState(controlState(pid));
	const onChange = (e) => {
		setValue(e.target.value);
	};

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
});
