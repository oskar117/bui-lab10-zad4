import React from "react";

export default function Browser({name, image, description}) {
  return (
    <section id={name.toLowerCase()}>
        <h4>{name}</h4>
        <img src={image} width="130px" height="130px"/>
        <p>{description}</p>
    </section>
  );
}