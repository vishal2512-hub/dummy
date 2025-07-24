import React, { useState } from "react";
import { X } from "lucide-react";

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleAuth = () => {
    onLoginSuccess(firstName || "User");
    onClose();
  };

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4">
  <div className="bg-white rounded-lg w-full max-w-sm p-6 relative shadow-md">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        <div className="space-y-3">
          {!isLogin && (
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded"
          onClick={handleAuth}
        >
          {isLogin ? "Sign In" : "Create Account"}
        </button>

        <div className="text-center mt-4 text-sm text-gray-500">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                className="text-blue-600"
                onClick={() => setIsLogin(false)}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-600"
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
