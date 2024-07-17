import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const token = localStorage.getItem("token");

  const tokenProtected = ["/", "/movie", "/tvshow", "/details/:id"];
  const publicProtected = ["/login"];

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to={"/login"} />;
    }
  }

  if (publicProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
