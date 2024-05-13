import React from "react";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";

const NavbarProfile = () => {
  return (
    <div className="flex justify-between gap-x-6 py-3 px-5 bg-white ">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="thumb"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-lg font-semibold leading-6 text-gray-900 ">
            Leslie Alexander
          </p>
          <p className=" truncate text-xs leading-3 text-gray-400">Online</p>
        </div>
      </div>
      <div className=" shrink-0 text-gray-900 flex  ">
        <div class="inline-block text-[25px] me-4 mt-2">
            <IoCall />
        </div>
        <div class="inline-block text-[25px] mt-2">
            <IoVideocam />
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
