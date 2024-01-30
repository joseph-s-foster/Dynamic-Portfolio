import { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Portfolio", to: "/portfolio", current: false },
  { name: "Languages", to: "/languages", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-2 lg:px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2"
                  onClick={handleMobileMenuToggle}
                >
                  {open ? (
                    <XMarkIcon className="block h-7 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="navbar-link flex space-x-2">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          " text-lg px-3", // Increased font size to 1.5rem (1.5 * 16px)
                          { "text-white": location.pathname === item.to },
                          "hover:underline" // Added hover underline
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={mobileMenuOpen}
            as={Fragment}
            enter="duration-200 ease-in"
            enterFrom="opacity-0 scale-100"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-100"
          >
            <Disclosure.Panel className="sm:hidden absolute top-12 inset-x-0 z-10">
              <div className="space-y-1 px-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={classNames(
                      "block px-3 py-1 text-lg",
                      "hover:underline"
                    )}
                    onClick={closeMobileMenu}
                    style={{ outline: "none" }} // Add this line to remove the blue border
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
