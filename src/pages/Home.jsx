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
    <div className={authModalOpen ? "overflow-hidden h-screen" : ""}>
      <Header
        setAuthModalOpen={setAuthModalOpen}
        isLoggedIn={isLoggedIn}
        user={{ name: userName }}
      />

      <HeroSection />
      <FilterTabs />

      <div className="flex px-4 gap-6">
        <div className="flex-1">
          <Post />
        </div>
        <Sidebar isLoggedIn={isLoggedIn} />
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
