"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Nav.module.css';
import useTailwindBreakpoint from '@/app/lib/hooks/useTailwindBreakpoint';

export default function NavBar() {
  // State to handle the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useTailwindBreakpoint();

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav id={styles.nav} className="flex items-center justify-between">
      <a href="/" className={styles.logo}>AMIR BLAQ</a>

      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border-[0.5px] border-gray-600">
            <FontAwesomeIcon className='h-4' color='white' icon={faBars} />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg border-[0.5px] border-gray-600  focus:outline-none">
            <div className="py-1">
            <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
        <a className="uppercase text-white" href="/#midMenu">Home</a>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
        <a className="uppercase text-white" href="/#midMenu">Adults</a>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
        <a className="uppercase text-white" href="/#midMenu">Kids</a>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
        <a className="uppercase text-white" href="/#midMenu">All</a>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <a className="uppercase text-white" href="/#midMenu">New</a>
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      <a className="uppercase text-white flex items-center" href="/cart">${(10.99).toFixed(2)} <FontAwesomeIcon className={styles.icons} icon={faShoppingCart} /></a>
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Chaggpt why is this not hidden on mobile view */}
      {/* <div className={`hidden flex-col sm:flex sm:flex-row`} id={styles.list}>
        <a className="uppercase" href="/#midMenu">Home</a>
        <a className="uppercase" href="/#midMenu">Adults</a>
        <a className="uppercase" href="/#midMenu">Kids</a>
        <a className="uppercase" href="/#midMenu">All</a>
        <a className="uppercase" href="/#midMenu">New</a>
        <a className="uppercase flex items-center" href="/cart">${(10.99).toFixed(2)} <FontAwesomeIcon className={styles.icons} icon={faShoppingCart} /></a>
      </div> */}

    </nav>
  );
}
