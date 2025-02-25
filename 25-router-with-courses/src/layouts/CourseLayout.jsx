import { Outlet } from "react-router-dom";
import Courses from "../components/Courses";

const CourseLayout = () => {
  return (
    <>
      <Courses />
      <Outlet />
    </>
  );
};

export default CourseLayout;
