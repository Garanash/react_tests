import { NavLink } from "react-router-dom";
import courses from "../data/courses.js";
import styles from "./Courses.module.css";

const Courses = () => {
  console.log(courses);
  return (
    <>
      <ul className={styles.ulLink}>
        {courses.map(
          (cours) => (
            <NavLink to={cours.slug} className={styles.courseLink}>
              {" "}
              {cours.discription}{" "}
            </NavLink>
          ),
          <br />
        )}
      </ul>
    </>
  );
};

export default Courses;
