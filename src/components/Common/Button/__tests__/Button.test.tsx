import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Btn as Button } from "../index";

describe("Button component", () => {
  it("should render a given text", () => {
    render(<Button>Hello Gideon welcome</Button>);
    expect(screen.getByText(/Hello Gideon welcome/i)).toBeInTheDocument();
  });
});
