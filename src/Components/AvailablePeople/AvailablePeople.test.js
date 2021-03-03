import React from "react";
import { render, screen } from "@testing-library/react";
import AvailablePeople from "./index";

const mappedList = { Country: [{ name: "Person1" }] };

test("renders a country", () => {
	render(
		<AvailablePeople mappedList={mappedList} togglePersonSelection={() => {}} />
	);
	const headingElement = screen.getByText("Country");
	expect(headingElement).toBeInTheDocument();
});

test("renders a checkbox", () => {
	render(
		<AvailablePeople mappedList={mappedList} togglePersonSelection={() => {}} />
	);
	const OptionElement = screen.getByRole("checkbox");
	expect(OptionElement).toBeInTheDocument();
});
