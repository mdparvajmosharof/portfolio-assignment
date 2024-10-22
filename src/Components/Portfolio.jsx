/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Diagno - Diagnostic Center Management System",
    description:
      "A platform for booking medical tests with Stripe integration. Includes user dashboards, admin test management, and data visualization. Admin login: b@b.com, password: diaG1#. Test card: 4242 4242 4242 4242.",
    url: "https://diagno-auth.web.app/",
  },
  {
    title: "Rento - Property Rental Platform",
    description:
      "A rental property platform built with MERN stack. Users can list, book, and manage properties with a responsive UI and real-time notifications.",
    url: "https://auth-rento.web.app/",
  },
  {
    title: "Alterno - Alternative Service Platform",
    description:
      "A platform for discovering services with advanced search, authentication, and bookings. Built using React, Express, and MongoDB for scalability.",
    url: "https://alterno-auth.web.app/",
  },
  {
    title: "My Portfolio Website",
    description:
      "A personal portfolio showcasing my skills in React and JavaScript, with a clean and responsive design.",
    url: "https://mdparvajmosharof.netlify.app/",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
