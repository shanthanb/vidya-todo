import React, { Fragment } from "react";

import "./availablePeople.css";

const AvailablePeople = ({ mappedList, togglePersonSelection }) => {
	return (
		<Fragment>
			<div className="available-people">
				{mappedList &&
					Object.keys(mappedList).length > 0 &&
					Object.keys(mappedList).map((country) => (
						<Fragment key={country}>
							<div className="d-flex flex-column">
								<h3>{country}</h3>
								{mappedList[country] &&
									mappedList[country].length > 0 &&
									mappedList[country].map((person) => (
										<Fragment key={person.name}>
											<label>
												<input
													type="checkbox"
													checked={person.selected}
													onChange={() =>
														togglePersonSelection(
															mappedList,
															country,
															person.id
														)
													}
												/>{" "}
												<span>{person.name}</span>
											</label>
										</Fragment>
									))}
							</div>
						</Fragment>
					))}
			</div>
		</Fragment>
	);
};

export default AvailablePeople;
