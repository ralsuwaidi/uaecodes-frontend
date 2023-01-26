// const navLinks = [
//   { url: '/about/', text: 'About' },
//   { url: '/gallery/', text: 'Gallery' },
//   { url: '/news/', text: 'News' },
//   { url: '/mentors/', text: 'Mentors' },
//   { url: '/competition/', text: 'Competition' },
// ];

import { BrutalBtnSmall } from '@/layouts/Common/Brutal';

const Header = () => (
  <header>
    <nav className="rounded  bg-neon-gray px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center whitespace-nowrap font-ubuntu-mono text-xl font-semibold dark:text-white">
            UAE CODES
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="mr-3">
            <BrutalBtnSmall text="JOIN" />
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border  bg-neon-gray p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-neon-gray md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-neon-purple md:dark:hover:bg-transparent md:dark:hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-neon-purple md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-neon-purple md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-neon-purple md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export { Header };
