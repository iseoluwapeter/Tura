import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { TuraLogo } from "../assets";

const mobileMenu = [
  { id: 1, title: "Services", link: "/services" },
  // { id: 2, title: "Solutions", link: "/solutions" },
  { id: 3, title: "Pricing", link: "/pricing" },
  { id: 4, title: "Company", link: "/company" },
  { id: 5, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="hero-bg-dot absolute inset-0  opacity-40 pointer-events-none" />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`z-30 sticky top-0 flex flex-row items-center justify-between py-3 px-5 md:px-20  transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent shadow-none"
        }`}
      >
        {/* Brand logo */}
        <div className="flex items-center space-x-2 text-green-600">
          <NavLink to="/">
            <img src={TuraLogo} alt="Tura" className="w-32 md:w-40" />
          </NavLink>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex flex-row space-x-12">
          {mobileMenu.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.link}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-green-650 font-semibold"
                    : "transition-all"
                }
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden text-3xl text-green-600 cursor-pointer"
          onClick={toggleNavbar}
        >
          <RiMenu3Fill />
        </div>
      </motion.nav>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-40 p-6 flex flex-col"
        >
          <div className="flex justify-end mb-8">
            <RiCloseFill
              className="text-2xl cursor-pointer"
              onClick={toggleNavbar}
            />
          </div>

          <ul className="space-y-6">
            {mobileMenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.link}
                  className="text-gray-800 text-lg"
                  onClick={toggleNavbar}
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
