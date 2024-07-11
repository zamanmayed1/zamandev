import { NavLink } from "react-router-dom";
import { FaHome, FaTools, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function MenuBar() {
  return (
    <div className="w-[220px] h-[45px] rounded-full ring-1 mx-auto right-0 left-0 bg-white  absolute top-2 flex justify-between items-center shadow-md p-1">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "flex-1 flex justify-center items-center text-[#1658f8] transition duration-300 ease-in-out transform hover:scale-105" 
            : "flex-1 flex justify-center items-center text-green-600  transition duration-300 ease-in-out transform hover:scale-105"
        }
      >
        <FaHome className="text-2xl" />
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => 
          isActive 
            ? "flex-1  border-l border-r flex justify-center items-center text-[#1658f8]   transition duration-300 ease-in-out transform hover:scale-105" 
            : "flex-1 border-l border-r flex justify-center items-center text-green-600  transition duration-300 ease-in-out transform hover:scale-105"
        }
      >
        <FaTools className="text-2xl" />
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive 
            ? "flex-1 flex border-r  justify-center items-center text-[#1658f8]   transition duration-300 ease-in-out transform hover:scale-105" 
            : "flex-1 flex  border-r justify-center items-center text-green-600  transition duration-300 ease-in-out transform hover:scale-105"
        }
      >
        <FaInfoCircle className="text-2xl" />
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          isActive 
            ? "flex-1 flex justify-center items-center text-[#1658f8]   transition duration-300 ease-in-out transform hover:scale-105" 
            : "flex-1 flex justify-center items-center text-green-600  transition duration-300 ease-in-out transform hover:scale-105"
        }
      >
        <FaEnvelope className="text-2xl" />
      </NavLink>
    </div>
  );
}
