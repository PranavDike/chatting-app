import React from "react";
// import { LiaCheckDoubleSolid } from "react-icons/lia";

const MessageCart = () => {
  return (
    <li className="flex justify-between gap-x-6 py-3 px-3 hover:bg-gray-100">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-11 w-11 flex-none rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="thumb"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-[14px] font-semibold leading-6 text-gray-900">
            Leslie Alexander
          </p>
          <p className=" truncate text-xs leading-3 text-gray-500">
            leslie.alexander@example.com
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">16:00</p>
        <p className=" text-xs leading-5 text-gray-500">
          {/* <LiaCheckDoubleSolid /> */}
        </p>
      </div>
    </li>
  );
};

export default MessageCart;
