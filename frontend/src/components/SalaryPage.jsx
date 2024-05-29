import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegCalendarCheck } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function SalaryPage() {
  return (
    <>

      <div className="loginpage bg-gray-600 m-0 p-0 font-semibold relative">
        <h1 className='text-3xl text-white'>Welcome to greytHR Portal</h1>
        <div className="container flex gap-1 h-screen w-full">
          <div className="first bg-white w-60">
            <div className="porfile bg-gray-100 text-black flex gap-1">
              <div className="logo text-3xl py-2"><FaUser /></div>
              <div className="profile-details">
                <h3>Amit Dhurway</h3>
                <a href="/view profile">View My Info</a>
              </div>
            </div>
            <Menu as="div" className="relative inline-block text-left w-full text-black">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Menu
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
              </div>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute w-full h-screen flex justify-center text-black origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="item flex py-2">
                      <IoHome />
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                              'block px-4 text-md'
                            )}
                          >
                            Home
                          </a>
                        )}
                      </MenuItem>
                    </div>
                    <div className="item flex py-2">
                      <FaHandHoldingUsd />
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 text-md'
                            )}
                          >
                            Salary
                          </a>
                        )}
                      </MenuItem>
                    </div>
                    <div className="item flex py-2">
                      <SlCalender />
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 text-md'
                            )}
                          >
                            Leave
                          </a>
                        )}
                      </MenuItem>
                    </div>
                    <div className="item flex py-2">
                      <FaRegCalendarCheck />
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 text-md'
                            )}
                          >
                            Attendence
                          </a>
                        )}
                      </MenuItem>
                    </div>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>

          <div className="Second bg-red-500 w-full">Second</div>
        </div>

      </div>

    </>
  )
}

export default SalaryPage;
