import { Title } from "Title";
import { Input } from "Input";

export const Field = ({pid}) => {
	return (
		<li>
			<Title pid= {pid}></Title>
			<Input pid = {pid}></Input>
		</li>
	);
  };

  