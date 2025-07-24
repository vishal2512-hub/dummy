import React from 'react'

const HeroSection = () => {
  return (
<div
  className="w-full h-52 sm:h-72 md:h-80 bg-cover bg-center flex items-end px-4 py-6"
      style={{
        backgroundImage: `url("https://img.pikbest.com/background/20220119/simple-flat-computer-office-background_6219891.jpg!bw340")`,
      }}
    >
      <div>
        <h2 className="text-2xl text-white font-semibold">Computer Engineering</h2>
        <p className="text-sm text-pink-300 font-medium">
          Explore your knowledge through articles
        </p>
      </div>
    </div>
  )
}

export default HeroSection
