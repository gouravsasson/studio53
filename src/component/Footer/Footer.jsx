import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import logo from '../../assets/logo white.png';
import { UilInstagram, UilBehance, UilLinkedinAlt } from '@iconscout/react-unicons';

const LINKS = [
  {
    title: "MENU",
    items: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/Projects" },
      { name: "Contacts", href: "/contacts" },
    ],
  },
  {
    title: "FOLLOW",
    items: [
      { icon: <UilInstagram className="h-10 w-10" />, href: "https://www.instagram.com/studio53.tm/" },
      { icon: <UilBehance className="h-10 w-10"  />, href: "https://www.behance.net/tahamalik3" },
      { icon: <UilLinkedinAlt className="h-10 w-10"  />, href: "https://www.linkedin.com/in/studio-fifty-three-94b5b4208/" },
    ],
  },
  {
    title: "CONTACTS",
    items: [
      { name: "+971557089953", href: "tel:+971557089953" },
      { name: "E-mail: taha@studio53tm.com", href: "mailto:taha@studio53tm.com" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" my-36 relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col items-center md:grid md:grid-cols-3 md:items-start">
          <img className="h-[70px] mb-6 md:mb-0" src={logo} alt="Logo" />
          <div className="md:grid col-span-2  grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex   mt-10 md:mt-0 md:mb-3 font-semibold "
                >
                  {title}
                </Typography>
                {title === "FOLLOW" ? (
                  <div className=" flex  mt-5 gap-3">
                    {items.map(({ icon, href }, index) => (
                      <Typography
                        as="a"
                        href={href}
                        key={index}
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                      </Typography>
                    ))}
                  </div>
                ) : (
                  items.map(({ name, href }, index) => (
                    <li key={index}>
                      <Typography
                        as={NavLink}
                        to={href}
                        color="gray"
                        className=" flex  py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                        onClick={scrollToTop}
                      >
                        {name}
                      </Typography>
                    </li>
                  ))
                )}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <Link to="#">Studio53</Link>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
