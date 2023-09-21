import React from "react";
import Links from "./Links.js";


function About(user) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
};

export default About;
