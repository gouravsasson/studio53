import { Typography } from "@material-tailwind/react";
import logo from '../../assets/logo white.png';
import { UilInstagram, UilBehance,UilLinkedinAlt } from '@iconscout/react-unicons';



const LINKS = [
  {
    title: "MENU",
    items: ["Home", "Project", "Contact US"],
  },
  {
    title: "FOLLOW",
    items: [
      <UilInstagram className="h-7 w-7" />,
      <UilBehance className="h-7 w-7" />,
      < UilLinkedinAlt className="h-7 w-7" />,
    ],
  },
  {
    title: "CONTACTS",
    items: ["+971557089953", "E-mail: taha@studio53tm.com"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="my-48 relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between  md:grid-cols-3">
          <img className="h-[70px]" src={logo} alt="" />
          <div className="grid col-span-2 grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {title === "FOLLOW" ? (
                  <div className="flex gap-4">
                    {items.map((link, index) => (
                      <Typography
                        as="a"
                        href="#"
                        key={index}
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    ))}
                  </div>
                ) : (
                  items.map((link, index) => (
                    <li key={index}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
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
            &copy; {currentYear} <a href="">Studio53</a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
