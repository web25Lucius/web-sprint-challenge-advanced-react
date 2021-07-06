import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />);
    const headerRender = getByText(/Checkout form/i)
    expect(headerRender).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
    const {getByText} = render(<CheckoutForm />);
    const successRender = getByText(/Woo/i)
    expect(successRender).toBeTruthy();

});
