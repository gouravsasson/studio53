import React from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo white.png';


export function Nav() {
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

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to='/'>
            <img
              src={logo}
              alt="Logo"
              className=" hidden mr-4 cursor-pointer py-1.5 h-[100px] w-auto lg:block"
            />
            <img
              src={logo}
              alt="Logo"
              className=" mr-4 cursor-pointer py-1.5 h-[60px] w-auto lg:hidden"
            />
          </Link>
          <div className="flex items-center gap-4">
            {navList.map((item, index) => (
              <NavLink key={index} to={item.href} className="mr-4 hidden lg:block font-boold">{item.name}</NavLink>
            ))}
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
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
        <MobileNav open={openNav}>
          {navList.map((item, index) => (
            <NavLink className="flex flex-wrap mt-4 text-black font-boold" key={index} to={item.href}>{item.name}</NavLink>
          ))}
        </MobileNav>
      </Navbar>
      
      
    </>
  );
}
