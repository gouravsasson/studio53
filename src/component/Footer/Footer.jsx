import { Typography } from "@material-tailwind/react";
import logo from '../../assets/logo white.png'
import { UilInstagram,UilBehance } from '@iconscout/react-unicons'
 
const LINKS = [
  {
    title: "MENU",
    items: ["Home", "Project", "Contact US", ],
  },
  
  {
    title: "CONTACTS",
    items: ["+971557089953",   "E-mail:  taha@studio53tm.com"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className=" my-48 relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img className=" h-[70px] " src= {logo} alt="" />
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Studio53</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <UilInstagram/>
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <UilBehance/>
              </svg>
            </Typography>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}
