import React from "react";
import MessageCart from "../components/MessageCart";
import { VscSearch } from "react-icons/vsc";
import MessageBox from "../components/MessageBox";

const Home = () => {
  return (
    <div>
      <div>
        {/* component */}
        <div className="flex w-screen h-screen ">
          {/* Component Start */}
          <div className="flex flex-col items-center w-14 pb-4 overflow-auto bg-gray-200">
            <a
              className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-200"
              href="/"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </a>
            <a
              className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
              href="/"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>

            <a
              className="flex items-center justify-center flex-shrink-0 w-10 h-10  mt-auto rounded hover:bg-gray-300"
              href="/"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>

          {/* Column 2 - message cart column */}
          <div className="flex flex-col w-80 border-r border-gray-300">
            <div className="sidebar-header">
              <div className="title">
                <h1 className="text-xl tracking-wide font-bold m-3">Messages</h1>
              </div>
              <div className="search  h-10 w-72 mx-auto rounded  bg-gray-300 mb-4">
                <div className="search-icon inline-block  align-middle  p-3">
                  <VscSearch />
                </div>

                <div className="search-input inline-block align-middle ">
                  <input
                    type="text"
                    placeholder="Search"
                    className=" focus:border-none focus:outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* message carts */}
            <div className="message-cart flex flex-col flex-grow  overflow-auto">
              <ul className=" divide-y divide-gray-100">
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
                <MessageCart />
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-grow bg-gray-500">
            <MessageBox />
          </div>
          {/* Component End  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
