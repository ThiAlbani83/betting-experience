import { useState } from "react";
import { menuItems } from "../data/data";
import { Link } from "react-scroll";

const Sidebar = ({sectionIds}) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-[22%] mt-10 hidden md:block">
      <ul className="flex flex-col gap-3 mt-10 text-base font-semibold text-gray-200 border border-r-4 border-r-gray-800/20 lg:text-lg font-inter">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={sectionIds[index]} // Use the section ID passed via props
              smooth={true}
              duration={1000}
              containerId="scrollableDiv" // Scroll within this container
              offset={-100} // Adjust this to control scroll position after clicking
              onClick={() => handleLinkClick(`section${index + 1}`)}
              className={`flex pl-2 items-center cursor-pointer ${
                activeLink === `section${index + 1}`
                  ? "text-primary-medium border-l-4 border-primary font-bold"
                  : "text-gray-700"
              } transition-all duration-100`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
