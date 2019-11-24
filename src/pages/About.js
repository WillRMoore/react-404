import React from "react";

function About(props) {
  return (
    <div className="page-container">
      <h1 className="page-title">About Us</h1>
      <p>
        The "Old About Us" page, with a URL of "/about-us", will automatically
        redirect to the new about page—which is the one your currently on. Click
        the "Old About Us" tab in the navbar to try it out.
      </p>
    </div>
  );
}

export default About;
