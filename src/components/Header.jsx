import React from "react";

const Header = ({ setAuthModalOpen, isLoggedIn, user }) => {
  return (
<header className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-4 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-green-600">ATQWORLD</h1>

      <input
    type="text"
    placeholder="Search..."
    className="border rounded px-3 py-2 w-full md:w-96"
  />

      {isLoggedIn ? (
        <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
          {user?.name}
        </span>
      ) : (
        <button
          onClick={() => setAuthModalOpen(true)}
          className="text-sm text-blue-600 font-semibold border px-4 py-1 rounded"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
