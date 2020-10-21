import React from "react";
import portImg from "../img/bkgry.jpg";
export default function About(props) {
  return (
    <div className="about_section">
      <h2 className="about_title">{props.title}</h2>
      <div className="about_content">
        <div className="about_image_content">
          <img src={portImg} alt="Michael Fazekas" className="image_me" />
          <h3 className="me_title">Mike Fazekas</h3>
          <span className="bold-text">Front-End Developer</span>
        </div>
        <div className="text_about">
          <p>
            I am a Self-taught Developer that specializes in Front-End
            Development with a Focus on MERN Stack Technologies. I have the
            assiduous mind set followed along with passion to learn and grow as
            a developer. I am always investing in my time to gain more knowledge
            and understanding in the programming world.
          </p>
          <p>
            In my free time away from code, I love spending time with my wife
            and our dog harley. (maltese-shiz tu mix.) I also enjoy a good round
            of golf and Bass Fishing with my friends. (Fish Fry anyone?) I am
            currently working for a Retail Company and I see the opportunities
            that Tech field can bring me and my family as I strive towards my
            goal.
          </p>
        </div>
      </div>
    </div>
  );
}
