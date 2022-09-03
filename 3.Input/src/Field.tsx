import { Title } from "Title";
import { ItemPresenter } from "Input";
import React from "react";

export const Field = ({ pid }) => {
	return (
		<li>
			<Title pid={pid}></Title>
			<ItemPresenter pid={pid}></ItemPresenter>
		</li>
	);
};
