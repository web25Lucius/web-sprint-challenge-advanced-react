import React from "react";
import { render} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   const {getByText} = render(<App />);
   expect(getByText(/Checkout Form/i));

});
    
test("form shows success message on submit with form details", () => {
    const {getByTestId} = render(<App />);
    
    expect(getByTestId(/successMessage/i));
});
