
export const Input = ({title, value}) => {
	return (
		<div className="form">
			<div className="control-set">
				<div className="control">
					<input className="form-control " placeholder={title} value={value}></input>
				</div>
			</div>
		</div>
	);
  };

  