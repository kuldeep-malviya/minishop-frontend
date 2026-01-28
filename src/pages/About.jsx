import React from 'react'

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="fs-5">
            <strong>Mini Shop</strong> is a modern e-commerce web application
            designed to provide users with a simple, fast, and reliable online
            shopping experience.
          </p>

          <p className="fs-5">
            Our platform offers a wide range of quality products at affordable
            prices. We focus on user satisfaction by ensuring easy navigation,
            secure transactions, and smooth performance.
          </p>

          <p className="fs-5">
            This project is developed using <strong>React</strong> for the
            frontend and <strong>Bootstrap</strong> for responsive and attractive
            UI design. It demonstrates real-world concepts like API integration,
            routing, and component-based architecture.
          </p>
        </div>
      </div>
    </div>
  );
};


export default About