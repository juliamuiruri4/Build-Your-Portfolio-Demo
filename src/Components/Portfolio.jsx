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
    title: "Seamless API Development with Data API Builder for your Static Website",
    description:
      "Learn how to use Data API Builder to create a RESTful API for your static website.",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/seamless-api-development-with-data-api-builder-for-your-static/ba-p/3859712",
  },
  {
    title: "Steps to Load a Power BI Report on Your React Application",
    description:
      "Learn how to embed a Power BI report in your React application.",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/steps-to-load-a-power-bi-report-on-your-react-application/ba-p/3822729",
  },
  {
    title: "A Guided Path to Low-Code Development at the Game of Learners",
    description:
      "Learn how to use Power Apps to create a low-code solution for a game.",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/a-guided-path-to-low-code-development-at-the-game-of-learners/ba-p/3708431",
  },
  {
    title: "Access Advancements in AI with OpenAI GPT-3 within the Power Platform",
    description:
      "Learn how to use OpenAI GPT-3 within the Power Platform to create intelligent applications.",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/access-advancements-in-ai-with-openai-gpt3-within-the-power/ba-p/3737981",
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
        <div className="container" style={{ padding: "1rem" }}>
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
