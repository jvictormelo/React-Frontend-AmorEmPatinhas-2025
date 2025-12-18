import PetNavbar from "../components/shared/PetNavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <PetNavbar />
      <Outlet />
    </>
  );
}
