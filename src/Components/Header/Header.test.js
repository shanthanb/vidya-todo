import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders header component with menu", () => {
	render(<Header />);
	const logoElement = screen.getByText("Logo");
	expect(logoElement).toBeInTheDocument();
});
