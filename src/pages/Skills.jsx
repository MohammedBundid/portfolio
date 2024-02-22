import React, { useState } from "react";
import Main from "../components/ui/Main";
import Card from "../components/ui/Card";

import reactSVG from "../assets/react.svg";
import node from "../assets/node.svg";
import golang from "../assets/go-lang.png";
import django from "../assets/django1.svg";
import php from "../assets/php.svg";
import astro from "../assets/astro.svg";
import tailwind from "../assets/tailwind.svg";
import vanilla from "../assets/vanilla.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import bgImage from "../assets/bg.jpg";
import Button from "../components/ui/Button";

const SkillsPage = () => {
  const [selectedTag, setSelectedTag] = useState();

  const handleTags = (tagId) => {
    console.log(tagId);
  };

  const tags = [
    { id: 1, title: "#frontend" }, // for frontend frameworks
    { id: 2, title: "#runtime" }, // for runtime frameworks
    { id: 3, title: "#backend" }, // for backend frameworks
    { id: 4, title: "#stacks" }, // for backend frameworks
  ];

  const titlearray = [
    { title: "html", image: html, tag: tags[0].id },
    { title: "css", image: css, tag: tags[0].id },
    { title: "vanilla js", image: vanilla, tag: tags[0].id },
    { title: "react", image: reactSVG, tag: tags[0].id },
    { title: "php", image: php, tag: tags[0].id },
    { title: "tailwind", image: tailwind, tag: tags[0].id },
    { title: "django", image: django, tag: tags[0].id },
    { title: "go", image: golang, tag: tags[0].id },
    { title: "node", image: node, tag: tags[1].id },
  ];

  return (
    <>
      <Main>
        <div className="w-1/2 h-8 flex gap-2 ml-2 mb-4">
          {tags.map((tag, index) => {
            return (
              <Button
                onClick={() => handleTags(tag.id)}
                key={index}
                title={tag.title}
                id={tag.id}
              />
            );
          })}
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {titlearray.map((lang, index) => {
            return (
              <Card
                key={index}
                title={lang.title}
                img={lang.image}
                myLink={"none"}
              />
            );
          })}
        </div>
      </Main>
    </>
  );
};

export default SkillsPage;
