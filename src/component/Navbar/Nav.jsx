import React from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo white.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Nav() {
  useGSAP(() => {
    gsap.from('#text', {
      duration: 3,
      opacity: 0,
      y: -100,
      ease: "power3.out"
    });
  }, []);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "Team", href: "/Team" },
    { name: "Contacts", href: "/contacts" },
  ];

  const handleNavLinkClick = () => {
    setOpenNav(false);
  };

  return (
    <>
      <div className="relative z-10  rounded-none px-4 py-2 lg:px-8 lg:py-4 md:mx-16">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to='/'>
            <img
              id="text"
              src={logo}
              alt="Logo"
              className="hidden mr-4 cursor-pointer py-1.5 h-[100px] w-auto lg:block"
            />
            <img
              id="text"
              src={logo}
              alt="Logo"
              className="mr-4 cursor-pointer py-1.5 h-[60px] w-auto lg:hidden"
            />
          </Link>
          <div className="flex items-center gap-4">
            {navList.map((item, index) => (
              <NavLink id="text" key={index} to={item.href} className="mr-4 hidden text-2xl lg:block font-Medium">{item.name}</NavLink>
            ))}

            <IconButton
              variant="text"
              className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        {openNav && <div className="fixed inset-0 bg-black opacity-100 z-40 w-screen "></div>}
        <Collapse open={openNav} className="fixed ml-6 z-50 w-24">
          {navList.map((item, index) => (
            <NavLink
              className="flex flex-wrap mt-4 text-xl text-white font-bold"
              key={index}
              to={item.href}
              onClick={handleNavLinkClick}
            >
              {item.name}
            </NavLink>
          ))}
        </Collapse>
      </div>
    </>
  );
}
