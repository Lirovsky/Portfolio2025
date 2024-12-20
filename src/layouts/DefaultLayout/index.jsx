import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="bg-light bg-cover bg-fixed bg-center font-roboto dark:bg-dark">
      <NavBar />
      <Outlet />
    </div>
  );
}
