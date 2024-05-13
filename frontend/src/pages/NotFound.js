import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
      <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
          <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
            404
          </div>
          <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
            Not Found
          </div>
        </div>
        <Link
          to="/"
          className="ml-4 text-lg text-blue-500 uppercase tracking-wider"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
