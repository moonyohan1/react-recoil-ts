import { Title } from "Title";
import { Input } from "Input";

export const Field = ({pid, value}) => {
	return (
		<li>
			<Title pid= {pid}></Title>
			<Input value = {value}></Input>
		</li>
	);
  };

  