import Link from 'next/link';

const navLinks = [
  { url: '/about/', text: 'About' },
  { url: '/gallery/', text: 'Gallery' },
  { url: '/news/', text: 'News' },
  { url: '/mentors/', text: 'Mentors' },
  { url: '/competition/', text: 'Competition' },
];

const Header = () => (
  <header>
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className=" mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="https://uaecodes-cdn-xwaay.ondigitalocean.app/uploads/UAE_Codes_Color_Logo_34dbab5c60.png?updated_at=2022-12-29T07:42:22.607Z"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            {navLinks.map((item) => (
              <li key={item.url}>
                <Link
                  href={item.url}
                  className=" border-none text-gray-700 hover:text-gray-900"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export { Header };
