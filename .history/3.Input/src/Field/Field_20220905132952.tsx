import { Title } from "Item/Title";
import { ItemPresenter } from "Item/Input";
import React from "react";

export const Field = ({ pid, modelKey }) => {
	return (
		<li>
			<Title pid={pid}></Title>
			<ItemPresenter pid={pid} modelKey = {modelKey}></ItemPresenter>
		</li>
	);
};
