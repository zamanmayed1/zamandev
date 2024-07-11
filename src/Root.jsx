import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaHome, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";
import MenuBar from "./Components/MenuBar";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('./assets/bg.jpg')]  justify-between  bg-no-repeat bg-cover bg-center animate-fade-in">
      <div id="detail" className="flex-grow">
        <Outlet />
      </div>
      <MenuBar />
    </div>
  );
}
