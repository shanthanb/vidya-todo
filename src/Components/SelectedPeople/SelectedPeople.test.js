import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SelectedPeople from "./index";

const mappedListNoneSelected = {
	Country: [{ name: "Person1", selected: false }],
};
const mappedListOneSelected = {
	Country: [{ name: "Person1", selected: true }],
};
const removePerson = jest.fn();

test("renders No Value Selected text and no headings", () => {
	render(<SelectedPeople mappedList={mappedListNoneSelected} />);
	const headingElement = screen.getByText("No Value Selected");
	expect(headingElement).toBeInTheDocument();
});

test("renders one country", () => {
	render(<SelectedPeople mappedList={mappedListOneSelected} />);
	const headingElement = screen.getByText("Country");
	expect(headingElement).toBeInTheDocument();
});

test("renders one selected person", () => {
	render(<SelectedPeople mappedList={mappedListOneSelected} />);
	const headingElement = screen.getByText("Person1");
	expect(headingElement).toBeInTheDocument();
	const removeButtonElement = screen.getByRole("button");
	expect(removeButtonElement).toBeInTheDocument();
});

test("calls removePerson() on clicking a selected person close button", () => {
	render(
		<SelectedPeople
			mappedList={mappedListOneSelected}
			removePerson={removePerson}
		/>
	);
	userEvent.click(screen.getByRole("button"));
	expect(removePerson).toHaveBeenCalled();
});
