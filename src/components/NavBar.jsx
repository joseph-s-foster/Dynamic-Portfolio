import { Fragment, useRef, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutside";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Projects", to: "/projects", current: false },
  { name: "Proficiencies", to: "/proficiencies", current: false },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const menuRef = useRef();
  const toggleRef = useRef();

  useClickOutside([menuRef, toggleRef], () => {
    toggleRef.current?.click();
  });

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-2 lg:px-2">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-7 left-0 flex items-center">
                <Disclosure.Button
                  id="menu"
                  ref={toggleRef}
                  className="relative inline-flex items-center justify-center rounded-md p-1"
                  onClick={handleMobileMenuToggle}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? (
                    <XMarkIcon
                      className="block h-7 w-7"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars2Icon
                      className="block h-7 w-7"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
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
            <Disclosure.Panel
              ref={menuRef}
              className="absolute top-12 w-max inset-x-0 z-10"
            >
              <div className="flex flex-col items-start space-y-1 mt-1 px-1">
                {navigation.map((item) => (
                  <div key={item.name} className="ml-3 py-2">
                    <Disclosure.Button
                      as={Link}
                      to={item.to}
                      className="inline text-base text-inherit active:text-inherit cursor-pointer [tap-highlight-color:transparent] [@media(hover:hover)]:hover:[color:#999999]"
                      onClick={closeMobileMenu}
                      aria-label={`Go to ${item.name}`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
