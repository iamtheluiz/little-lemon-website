import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  const testimonials = [
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Doe",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "John Smith",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <header>
          <h2>What people say about us!</h2>
        </header>
        <div className="list">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;