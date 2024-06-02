import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import About from "../About"

test("Should load the contact us component", () => {
    render(<About/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})