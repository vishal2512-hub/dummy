import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FilterTabs from "../components/FilterTabs";
import Post from "../components/Post";
import AuthModal from "../components/AuthModal";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div
      className={`relative min-h-screen ${
        authModalOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      {authModalOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"></div>
      )}

      <div className="relative z-50">
        <Header
          setAuthModalOpen={setAuthModalOpen}
          isLoggedIn={isLoggedIn}
          user={{ name: userName }}
        />

        <HeroSection />
        <FilterTabs />

        <div className="flex flex-col lg:flex-row px-4 gap-6 mt-4">
          <div className="flex-1">
            <Post isLoggedIn={isLoggedIn} />
          </div>

         <div className="w-full lg:w-[300px]">
    <Sidebar isLoggedIn={isLoggedIn} />
  </div>
        </div>
      </div>

      {authModalOpen && (
        <AuthModal
          onClose={() => setAuthModalOpen(false)}
          onLoginSuccess={(name) => {
            setUserName(name);
            setIsLoggedIn(true);
          }}
        />
      )}
    </div>
  );
};

export default Home;
