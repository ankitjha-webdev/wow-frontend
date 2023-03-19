import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "../login/Login";
import Error from "../error/Error";
import Student from "../student/Student";
import Admin from "../admin/Admin";
import Layout from "../Layout/Layout";
import Guider from "../guider/Guider";

const AppRoutes = () => {
  return (
    <>
     <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="student" element={<Student />} />
          <Route path="admin" element={<Admin />} />
          <Route path="guider" element={<Guider />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes