import { Title } from "Item/Title";
import { ItemPresenter } from "Item/Input";
import React from "react";

export const Field = ({ pid }) => {
	return (
		<li>
			<Title pid={pid}></Title>
			<ItemPresenter pid={pid}></ItemPresenter>
		</li>
	);
};
