import React from "react";
import { UserCircle } from "lucide-react";

const dummyPosts = [
  {
    category: "Article",
    title: "What if famous brands had regular fonts?",
    snippet: "I’ve worked in UX for the better part of a decade...",
    author: "Saritha Kumra",
    timestamp: "1.4k views · 2 mins ago",
    views: "1.4k",
  },
  {
    category: "Education",
    title: "Tax Benefits for Investment under NPS launched by Govt.",
    snippet: "The scheme allows tax-free retirement planning...",
    author: "Sashi West",
    timestamp: "998 views · 5 mins ago",
    views: "998",
  },
  {
    category: "Education",
    title: "Tax Benefits for Investment under NPS launched by Govt.",
    snippet: "The scheme allows tax-free retirement planning...",
    author: "Sashi West",
    timestamp: "998 views · 5 mins ago",
    views: "998",
  },
  {
    category: "Education",
    title: "Tax Benefits for Investment under NPS launched by Govt.",
    snippet: "The scheme allows tax-free retirement planning...",
    author: "Sashi West",
    timestamp: "998 views · 5 mins ago",
    views: "998",
  },
];

const Post = () => {
  return (
    <div className="px-6 py-6">
      {dummyPosts.map((post, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow mb-6 overflow-hidden"
        >
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://img.pikbest.com/background/20220119/simple-flat-computer-office-background_6219891.jpg!bw340")`,
            }}
          />

          <div className="p-4">
            <span className="text-xs text-pink-500 font-medium">
              {post.category}
            </span>
            <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{post.snippet}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <UserCircle className="w-8 h-8 text-gray-600" />
                <span className="text-sm text-gray-700">{post.author}</span>
              </div>
              <span className="text-sm text-gray-500">{post.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
