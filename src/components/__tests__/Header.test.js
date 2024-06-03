import { Provider } from 'react-redux';
import Header from '../Header'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore'
import "@testing-library/jest-dom"

it("should render the name of the user", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const heading = screen.findAllByText("pushparaj K");
    expect(heading).toBeInTheDocument();
}); 