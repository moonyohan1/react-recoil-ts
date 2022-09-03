import { Title } from "Title";
import { Input } from "Input";

export const Field = ({title, value}) => {
	return (
		<li>
			<Title title= {title}></Title>
			<Input value = {value}></Input>
		</li>
	);
  };

  