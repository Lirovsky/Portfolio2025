import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { FaMoon, FaRegSun } from "react-icons/fa6";

import logoDark from "../../img/logoDark.png";
import logoLight from "../../img/logoLight.png";

export default function DefaultLayout() {
  const navItems = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Projetos",
      to: "/projetos",
    },
    {
      id: 3,
      title: "Skills",
      to: "/skills",
    },
    {
      id: 4,
      title: "Sobre",
      to: "/sobre",
    },
    {
      id: 5,
      title: "Contato",
      to: "/contato",
    },
  ];
  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${darkMode && "dark"} bg-light bg-cover bg-fixed bg-center font-roboto dark:bg-dark`}
    >
      <Navbar className="fixed top-0 z-50 w-full bg-black/70 px-10 shadow-md shadow-orange-500 dark:bg-black/70 dark:shadow-cyan-500">
        <div className="flex gap-x-3">
          <NavLink to={"/"}>
            {darkMode ? (
              <img
                src={logoDark}
                className="w-44"
                alt="Logotipo escrito Lirodev"
              />
            ) : (
              <img
                src={logoLight}
                className="w-44"
                alt="Logotipo escrito Lirodev"
              />
            )}
          </NavLink>
          <button
            className="rounded-full border-4 border-gray-300 px-2 py-1 hover:border-orange-500 hover:bg-transparent focus:ring-transparent dark:border-cyan-400 dark:hover:border-purple-700 dark:hover:bg-transparent dark:focus:ring-transparent"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FaRegSun className="text-cyan-400" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </button>
        </div>
        <Navbar.Toggle className="bg-transparent p-3 text-orange-500 hover:bg-transparent focus:bg-transparent focus:ring-orange-500 md:hidden dark:text-cyan-400 dark:hover:bg-transparent dark:focus:bg-transparent dark:focus:ring-cyan-400" />

        <Navbar.Collapse>
          <ul className="mt-4 flex flex-col gap-1 md:mt-0 md:flex-row md:text-sm md:font-medium">
            {navItems.map((item) => (
              <Navbar.Link key={item.id}>
                <NavLink
                  to={item.to}
                  className="px-4 py-3 text-lg font-semibold uppercase tracking-wider text-gray-300 hover:text-orange-500 md:px-2 lg:px-3 dark:text-cyan-400 dark:hover:text-purple-600"
                >
                  {item.title}
                </NavLink>
              </Navbar.Link>
            ))}
          </ul>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
