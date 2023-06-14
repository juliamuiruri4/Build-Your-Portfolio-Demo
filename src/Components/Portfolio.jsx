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
    title: "How to build a Power Apps Component using TypeScript 🎉",
    description:
      "Use your coding skills to build custom controls that will be deployed to the Dataverse to be accessed by citizen developers as drag-and-drop controls for their applications. ",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/how-to-build-power-apps-custom-controls-using-typescript/ba-p/3684073",
  },
  {
    title: "Access advancements in AI with OpenAI GPT3 within the Power Platform",
    description:
      "This blog is for you to get a brief introduction to these advancements in the field of AI and how you can leverage them using the least engineering qualifications. .",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/access-advancements-in-ai-with-openai-gpt3-within-the-power/ba-p/3737981",
  },
  {
    title: "Launch into the Cloud with GitHub and Azure",
    description:
      "There is nothing that speaks more dev than having a recruiter ask for your resume and you point them to a url",
    url: "https://github.com/microsoft/workshop-library/tree/main/short/deploy-to-azure-from-github#launch-into-the-cloud-with-github-and-azure",
  },
  {
    title: "Use GitHub Codespaces to accelerate your projects",
    description:
      "Short video to explain why you should use GitHub Codespaces, and how to access it for free as a student.",
    url: "https://youtu.be/A-WYJ0BUVQ4",
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
