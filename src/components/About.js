import React,{useEffect} from "react";
import portImg from "../img/bkgry.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = (props)=> {
  useEffect(()=>{
    Aos.init({disable:'phone', duration: 2000})
  },[]);
  return (
    <div className="about_section">
    
      <h2 data-aos="fade-up" className="about_title">{props.title}</h2>
      <div className="about_content">
        <div className="about_image_content">
          <img data-aos="fade-right" src={portImg} alt="Michael Fazekas" className="image_me" />
          <h3 data-aos="fade-right" className="me_title">Mike Fazekas</h3>
          <span data-aos="fade-right" className="bold-text">Front-End Developer</span>
        </div>
        <div data-aos="fade-left" className="text_about">
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
export default About;