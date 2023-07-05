import styles from "./Styles/AboutSection.module.css";
import Fade from "react-reveal/Fade";
import akash from "./Images/WhatsApp Image 2023-05-16 at 12.48.58 AM.jpeg"


export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p style={{backgroundColor:"black",color:"white",width:"30%",margin:"auto",borderRadius:"40px",padding:"5px"}}>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
            style={{borderRadius:"50%"}}
              src={akash}
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Akash Mishra</span>{" "}
            </h2>
            <p>
              A passionate aspiring Full Stack Developer skilled in MERN stack,
              molded and shaped by Masai School's numerous training. Actively
              ready to join the great living team of a good start-up to adapt me
              in any situation and the environment with ease and perform the
              best.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
