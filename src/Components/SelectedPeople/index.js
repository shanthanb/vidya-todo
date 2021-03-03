import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";

import "./selectedPeople.css";

const SelectedPeople = ({ mappedList, ...rest }) => {
	const isAnyoneInCountrySelected = (mappedList, country) => {
		return mappedList[country].some((person) => person.selected === true);
	};

	const isAnyoneSelected = (mappedList) => {
		return Object.keys(mappedList).some((country) =>
			isAnyoneInCountrySelected(mappedList, country)
		);
	};

	return (
		<Fragment>
			<div className="selected-people">
				{mappedList &&
				Object.keys(mappedList).length > 0 &&
				isAnyoneSelected(mappedList) ? (
					Object.keys(mappedList).map((country) => (
						<Fragment key={country}>
							{isAnyoneInCountrySelected(mappedList, country) && (
								<h3 className="mb-2 mt-2">{country}</h3>
							)}
							{mappedList[country].map((person) => (
								<Fragment key={person.id}>
									{person.selected && (
										<div className="d-flex justify-content-between align-items-center selected-person">
											<span>{person.name}</span>
											<Button
												className="remove-icon"
												onClick={() =>
													rest.removePerson(mappedList, country, person.id)
												}
											>
												X
											</Button>
										</div>
									)}
								</Fragment>
							))}
						</Fragment>
					))
				) : (
					<center>No Value Selected</center>
				)}
			</div>
		</Fragment>
	);
};

export default SelectedPeople;
