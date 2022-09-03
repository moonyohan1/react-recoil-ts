import { Title } from "Title";
import { Input } from "Input";
import React from "react";

export const Field = ({ pid }) => {
	return (
		<li>
			<Title pid={pid}></Title>
			<Input pid={pid}></Input>
		</li>
	);
};
