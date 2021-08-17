import React, {useState} from 'react';


import '../Task.css';
import Button from './Button';


const AddTask = ({handleTaskAddicion}) => {

	const [inputData, setInputData] = useState("");

	const handleInputChange = (e) => {
		setInputData(e.target.value);
	}

	const handleAddTaskClick = () => {
		handleTaskAddicion(inputData);
		setInputData("");
	}

	return (
		<div className="add-taks-container">
			<input
				onChange={handleInputChange}
				className="add-input"
				type="text"
				value={inputData}
			/>
			<div className='button-container'>
				<Button onClick={handleAddTaskClick}>Adicionar</Button>
			</div>
		</div>

	);
}

export default AddTask;