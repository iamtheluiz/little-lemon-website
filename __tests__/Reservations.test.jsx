import { render, screen } from "@testing-library/react";

import Reservations from "../src/pages/Reservations";

describe("Reservations page render test", () => {
  it("renders Reservations page", async () => {
    render(<Reservations />);
    
    const reservationDescription = screen.getByText(/Reservation/i);
    const dateInput = screen.getByLabelText(/Choose a date/i);
    const timeInput = screen.getByLabelText(/Choose a time/i);
    const guestInput = screen.getByLabelText(/Number of guests/i);
    const occasion = screen.getByLabelText(/Occasion/i);

    expect(reservationDescription).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestInput).toBeInTheDocument();
    expect(occasion).toBeInTheDocument();
  });
});