import { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Projects", to: "/projects", current: false },
  { name: "Proficiencies", to: "/proficiencies", current: false },
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
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-2 lg:px-2">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-7 left-0 flex items-center">
                <Disclosure.Button
                  id="menu"
                  className="relative inline-flex items-center justify-center rounded-md p-2"
                  onClick={handleMobileMenuToggle}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars2Icon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>MENU
              </div>
              {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
              </div> */}
            </div>
          </div>

          <Transition
            show={mobileMenuOpen}
            as={Fragment}
            enter="duration-050 ease-in"
            enterFrom="opacity-0 scale-100"
            enterTo="opacity-100 scale-100"
            leave="duration-050 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-100"
          >
            <Disclosure.Panel className="absolute top-12 inset-x-0 z-10">
              <div className="space-y-2 mt-2 px-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    id="menu"
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={classNames(
                      "block mx-3 py-2 text-xl",
                      "hover:underline"
                    )}
                    onClick={closeMobileMenu}
                    style={{ outline: "none", width: "1%" }}
                    aria-label={`Go to ${item.name}`}
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
