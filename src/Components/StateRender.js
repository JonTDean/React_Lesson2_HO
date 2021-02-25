import React, { useState, useEffect } from 'react';
import States from '../db/states.js';

function StateRender() {
	const [stateData, setStateData] = useState({ states: [] });

	useEffect(() => {
		setStateData(States);
	}, []);

	console.log(stateData);
	return stateInfo(stateData);
}

let stateInfo = (states) => {
	return (
		<table>
			<thead>
				<tr>
					<th>State Name</th>
					<th>State Abbreviation</th>
				</tr>
			</thead>
			<tbody>
				{states.map((state) => {
					return (
						<tr>
							<th>{state.name}</th>
							<th>{state.abbreviation}</th>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default StateRender;
