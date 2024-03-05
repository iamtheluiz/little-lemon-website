import { render, screen } from "@testing-library/react";

import Home from "../src/pages/Home";

describe("Home page render test", () => {
  it("renders Home page", async () => {
    render(<Home />);
    
    const heroDescription = screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i);
    const specialSection = screen.getByText(/This weeks specials!/i);
    const testimonialSection = screen.getByText(/What people say about us!/i);
    const storySection = screen.getByText(/Our story/i);

    expect(heroDescription).toBeInTheDocument();
    expect(specialSection).toBeInTheDocument();
    expect(testimonialSection).toBeInTheDocument();
    expect(storySection).toBeInTheDocument();
  });
});