import React, { useState } from "react";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const App = () => {
	
	// This state will store the parsed data
	const [data, setData] = useState([]);
	
	// It state will contain the error when
	// correct file extension is not used
	const [error, setError] = useState("");
	
	// It will store the file uploaded by the user
	const [file, setFile] = useState("");

	// This function will be called when
	// the file input changes
	const handleFileChange = (e) => {
		setError(""); 
		if (e.target.files.length) {
			const inputFile = e.target.files[0]; 
			const fileExtension = inputFile?.type.split("/")[1];
			if (!allowedExtensions.includes(fileExtension)) {
				setError("Please input a csv file");
				return;
			} 
			setFile(inputFile);
		}
	};
	const handleParse = () => { 
		if (!file) return setError("Enter a valid file"); 
		const reader = new FileReader(); 
		reader.onload = async ({ target }) => {
			const csv = Papa.parse(target.result, { header: true });
			const parsedData = csv?.data;
            console.log(parsedData)
			// const columns = Object.keys(parsedData[0]);
			// setData(columns);
		};
		reader.readAsText(file);
	};

	return (
		<div>
			<label htmlFor="csvInput" style={{ display: "block" }}>
				Enter CSV File
			</label>
			<input
				onChange={handleFileChange}
				id="csvInput"
				name="file"
				type="File"
			/>
			<div>
				<button onClick={handleParse}>Parse</button>
			</div>
			<div style={{ marginTop: "3rem" }}>
				{error ? error : data.map((col,
				idx) => <div key={idx}>{col}</div>)}
			</div>
		</div>
	);
};

export default App;
