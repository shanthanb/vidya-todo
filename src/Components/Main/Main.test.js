import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Main } from "./index";

const mappedListNoneSelected = {
	Country: [{ name: "Person1", selected: false }],
};
const fetchPeople = jest.fn();
const togglePersonSelection = jest.fn();

test("calls fetchPeople() when renders selected person on clicking an available person", () => {
	render(
		<Main mappedList={mappedListNoneSelected} fetchPeople={fetchPeople} />
	);
	expect(fetchPeople).toHaveBeenCalled();
});

test("calls toggleSelected() on clicking an available person", () => {
	render(
		<Main
			mappedList={mappedListNoneSelected}
			fetchPeople={fetchPeople}
			togglePersonSelection={togglePersonSelection}
		/>
	);
	userEvent.click(screen.getByRole("checkbox"));
	expect(togglePersonSelection).toHaveBeenCalled();
});
