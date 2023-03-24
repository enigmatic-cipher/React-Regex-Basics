import { useState } from 'react';

export default function MinuteInput() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		const newValue = event.target.value;
		const regex = /^\d{0,3}$/;

		if (regex.test(newValue)) {
			setValue(newValue);
		}
	}

	return (
		<>
			<h3>Input Number upto three digits</h3>
			<input type="text" value={value} onChange={handleChange} />
		</>
	);
}