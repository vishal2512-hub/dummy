import React from "react";

const Header = ({ setAuthModalOpen, isLoggedIn, user }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-green-600">ATQWORLD</h1>

      <input
        type="text"
        placeholder="Search for your favorite posts (jobs)"
        className="border rounded px-4 py-2 w-96"
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
