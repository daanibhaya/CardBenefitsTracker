import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, columns, cardEdit, updateCard }) => {
	const [inputs, setInputs] = useState(cardEdit);
	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e) => {
		console.log(inputs);
		updateCard(inputs);

		closeModal();
	};

	return (
		<div
			className="modal-container"
			onClick={(e) => {
				if (e.target.className === "modal-container") closeModal();
			}}
		>
			<div className="modal">
				<form>
					<div>
						<label for="name">Name </label>
						<input
							type="text"
							name="name"
							value={inputs.name}
							onChange={handleChange}
						/>
					</div>
					{columns.map((column, index) => (
						<div key={index}>
							<label for={column.accessor}>{column.label} </label>
							<input
								type="number"
								name={column.accessor}
								min={0}
								max={9}
								value={inputs[column.accessor]}
								onChange={handleChange}
							/>
						</div>
					))}
				</form>
				<div>
					<button className="modal-button" type="submit" onClick={handleSubmit}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};
