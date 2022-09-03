import { Title } from "Title";
import { Input } from "Input";

export const Field = React.memo(({ pid }) => {
	return (
		<li>
			<Title pid={pid}></Title>
			<Input pid={pid}></Input>
		</li>
	);
});
