import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    
    //grabbing elements
    const firstNameValue = screen.getByLabelText(/first name:/i)
    const lastNameValue = screen.getByLabelText(/Last Name:/i)
    const addressValue = screen.getByLabelText(/Address:/i)
    const cityValue = screen.getByLabelText(/City:/i)
    const stateValue = screen.getByLabelText(/State:/i)
    const zipValue = screen.getByLabelText(/Zip:/i)
    
    //typing in inputs
    userEvent.type(firstNameValue, 'Ahmad');
    userEvent.type(lastNameValue, 'Wahidy');
    userEvent.type(addressValue, '123 high street')
    userEvent.type(cityValue, 'Oakland')
    userEvent.type(stateValue, 'CA')
    userEvent.type(zipValue, '12345')

    //clicking button
    const button = screen.getByRole('button');
    userEvent.click(button);

    //looking for the success message
    const messageDisplay = screen.queryByTestId(/SuccessMessage/i)
    expect(messageDisplay).toBeInTheDocument();
    expect(messageDisplay).toBeTruthy();
    expect(messageDisplay).not.toBeNull();
   
});

